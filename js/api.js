const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let contatos = [];

app.get("/listar_contatos", (req, res) => {
  res.json(contatos);
});

app.post("/gravar_contato", (req, res) => {
  const { nome, curso, email } = req.body;
  if (nome && curso && email) {
    contatos.push({ nome, curso, email });
    res.json({
      mensagem: `Olá, ${nome}! Seu contato foi cadastrado com sucesso, seja bem vindo!.`,
    });
  } else {
    res.status(400).json({
      erro: "Dados incompletos. Certifique-se de enviar seu nome, curso e e-mail.",
    });
  }
});

app.listen(port, () => {
  console.log("Servidor Iniciado");
});
