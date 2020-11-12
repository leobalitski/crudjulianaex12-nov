module.exports = app => {
    const pedidosController = require("../controllers/pedido.controller.js");

    app.post("/pedidos", pedidosController.create);

    app.get("/pedidos", pedidosController.findAll);

    app.get("/pedidos/:pedidoID", pedidosController.findOne);

    app.put("/pedidos/:pedidoID", pedidosController.update);

    app.delete("/pedidos/:pedidoID", pedidosController.delete);

    app.delete("/pedidos", pedidosController.deleteAll);
}