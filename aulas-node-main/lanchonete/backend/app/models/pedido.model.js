const sql = require("./db.js");

//construtor
const pedidoModel = function (pedido) {
    this.status = pedido.status;
    this.hora = pedido.hora;
}


//Cria um novo pedido no banco
pedidoModel.create = (pedido, result) => {
    sql.query("INSERT INTO pedidos SET ? ", pedido, (err, res) => {
        if (err) {
            console.log("Erro:", err);
            result(err, null);
            return;
        }
        console.log("pedido criado: ", { idpedidos: res.insertId, ...pedido });
        result(null, { idpedidos: res.insertId, ...pedido });

    });
    //implementar criação de um novo pedido no banco
};

//Selecionar um pedido através de um ID
pedidoModel.findById = (pedidoID, result) => {
    sql.query("SELECT * FROM pedidos WHERE idpedidos = " + pedidoID, (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }

        if (res.length) {
            console.log("pedido encontrado: ", res[0]);
            result(null, res[0]);
            return;
        } else
            result({ kind: "not_found" }, null)

    })

};

//Selecionar todos os pedidos
pedidoModel.getAll = (result) => {
    sql.query("SELECT * FROM pedidos", (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }
        console.log("pedidos: ", res);
        result(null, res);
    })
}

//Atualizar pedido através de um ID
pedidoModel.updateById = (pedidoID, pedido, result) => {
    sql.query("UPDATE pedidos SET status = ?, hora = ? WHERE idpedidos = ? ", [pedido.status, pedido.hora, pedidoID], (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(err, null);
        } else if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
        } else {
            console.log("pedido atualizado: ", { idpedidos: pedidoID, ...pedido });
            result(null, { idpedidos: pedidoID, ...pedido });
        }
    })
}


//Remover pedido através de um ID
pedidoModel.remove = (pedidoID, result) => {
    sql.query("DELETE FROM pedidos WHERE idpedidos = ?", pedidoID, (err, res) => {
        if (err) {
            console.log("erro:", err);
            result(err, null);
        } else if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
        } else {
            result(null, res);
        }
    })
}

//Remover todos os pedidos
pedidoModel.removeAll = (result) => {
    sql.query("DELETE FROM pedidos", (err, res) => {
        if (err) {
            console.log("erro:", err);
            result(err);
        } else {
            result(null);
        }
    })
}

module.exports = pedidoModel;