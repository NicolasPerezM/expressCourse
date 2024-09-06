const express = require("express");
const routerApi = require("./routes");

const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);


/*app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    })
  }else{
    res.send("No hay limit ni offset");
  }
})*/


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

