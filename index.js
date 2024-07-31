const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/index");
const conexao = require("./infraEstrutura/conexao");
const tabelas = require("./infraEstrutura/tabelas");

tabelas.init(conexao);

router(app);

app.listen(port, (error) =>{
    if(error){
        console.log(error)
        return;
    }

    console.log("Passou");
});