const express = require("express");
const {faker} = require("@faker-js/faker");
const { name } = require("faker/lib/locales/az");

const router = express.Router();

router.get('/', (req, res) => {
  const categorias = [];
  const {size} = req.query;
  const limit = size || 10;
  for(let i = 0; i < limit; i++){
    categorias.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url()
    })
  }
  res.json(categorias);
});

router.get('/:categoriaId/productos/:productosId', (req, res) => {
  const { categoriaId, productosId } = req.params;
  res.json({
    categoriaId,
    productosId
  })
})

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: "Creado",
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: "update",
    data: body,
    id
  })
})

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    message: "delete",
    id
  })
})

module.exports = router;
