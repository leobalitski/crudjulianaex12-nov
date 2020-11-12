const produtoPedidoModel = require("../models/produto_pedido.model.js");

exports.create = (req, res) => {
    const produtoPedido = new produtoPedidoModel({
        produtos_idprodutos: req.body.produtos_idprodutos,
        pedidos_idpedidos: req.body.pedidos_idpedidos,
        observacao: req.body.observacao
    });

    produtoPedidoModel.create(produtoPedido, (err, data) => {
        res.send(data);
    });
}

exports.findAll = (req, res) => {
    produtoPedidoModel.getAll((err, data) => {
        res.send(data);
    });
}

exports.findOne = (req, res) => {
    produtoPedidoModel.findById(req.params.produtoPedidoId, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({
                    message: "Registro não encontrado com ID " + req.params.produtoPedidoId
                });
            }
        }
        res.send(data);
    })
}

exports.findByPedido = (req, res) => {
    produtoPedidoModel.getByPedido(req.params.pedidoId, (err, data) => {
        res.send(data);
    })
}

exports.findByProduto = (req, res) => {
    produtoPedidoModel.getByProduto(req.params.produtoId, (err, data) => {
        res.send(data);
    })
}