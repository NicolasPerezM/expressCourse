const express = require("express");
const {faker} = require("@faker-js/faker");
const { name } = require("faker/lib/locales/az");

const router = express.Router();

router.get('/', (req, res) => {
  const productos = [];
  const {size} = req.query;
  const limit = size || 10;
  for(let i = 0; i < limit; i++){
    productos.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url()
    })
  }
  res.json(productos);
});

router.get('/filter', (req, res)=> {
  res.send('Hello soy un filter');
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  if (id === '999') {
    res.status(404).json({
      message: "Not found",
    })
  } else {
    res.status(200).json({
      id,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
     });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "Producto creado",
    data: body
  });
})

router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: "update",
    data: body,
    id
  });
})

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    message: "deleted",
    id
  });
})

module.exports = router;
