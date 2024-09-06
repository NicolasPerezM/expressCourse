
const express = require("express");
const productosRouter = require("./productos.router");
// const usersRouter = require("./users.router");
const categoriaRouter = require("./categorias.router");
function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use('/productos', productosRouter);
  router.use('/categorias', categoriaRouter);
}

module.exports = routerApi;
