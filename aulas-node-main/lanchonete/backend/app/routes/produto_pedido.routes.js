module.exports = app => {
    const produtoPedidoController = require("../controllers/produto_pedido.controller.js");

    // PADRÕES HTTP
    // POST - ENVIANDO DADOS PARA A API
    // GET - RESGATANDO DADOS DA API
    // PUT - ENVIAR DADOS PARA ATUALIZAR
    // DELETE - DELETAR DADOS

    app.post("/produtos_pedidos", produtoPedidoController.create);


    app.get("/produtos_pedidos", produtoPedidoController.findAll);

    //Select a partir do identificador da tabela, do identificador do pedido e do ID do produto

    // localhost:3000/produtos_pedidos/4 -> selecionar todos os produtos_pedidos com identificador 4
    app.get("/produtos_pedidos/:produtoPedidoId", produtoPedidoController.findOne);


    // localhost:3000/produtos_pedidos/pedido/10 -> selecionar os produtos_pedidos do pedido com identificador 10
    app.get("/produtos_pedidos/pedido/:pedidoId", produtoPedidoController.findByPedido);

    // localhost:3000/produtos_pedidos/produto/2 -> selecionar os produtos_pedidos do produto com identificador 2
    app.get("/produtos_pedidos/produto/:produtoId", produtoPedidoController.findByProduto);
    /*
                app.put("/produtos_pedidos/:produtoPedidoId", produtoPedidoController.update);

                // localhost:3000/produtos_pedidos/4 -> deletar todos os produtos_pedidos com identificador 4
                app.delete("/produtos_pedidos/:produtoPedidoId", produtoPedidoController.delete);

                // localhost:3000/produtos_pedidos/pedido/10 -> deletar os produtos_pedidos do pedido com identificador 10
                app.delete("/produtos_pedidos/pedido/:pedidoId", produtoPedidoController.deleteByPedido);

                // localhost:3000/produtos_pedidos/produto/2 -> deletar os produtos_pedidos do produto com identificador 2
                app.delete("/produtos_pedidos/produto/:produtoId", produtoPedidoController.deleteByProduto);

                app.delete("/produtos_pedidos", produtoPedidoController.deleteAll);
            */
}