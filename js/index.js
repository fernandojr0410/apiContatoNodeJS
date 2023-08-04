const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

let contatos = [];

app.get("/teste", (req, res) => {
  res.json(contatos);
});

app.post("/inserindo", (req, res) => {
  const { nome, idade } = req.body;
  if (nome && idade) {
    contatos.push(nome, idade);
    res.json({
      mensagem: `Olá, ${nome}, você conseguiu consumir sua primeira api`,
    });
  } else {
    res.status(400).json({
      erro: "Por favor, insira nome e idade. Tente novamente!",
    });
  }
});

app.listen(port, () => {
  console.log("Servidor Iniciado");
});
