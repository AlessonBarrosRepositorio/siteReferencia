const express = require("express");
const app = express();
//const port = 3000;
const router = require("./routers/index");
const pool = require("./infraEstrutura/conexao");
const tabelas = require("./infraEstrutura/tabelas");


(async() =>{
    await tabelas.init(pool);
    router(app);
    app.listen(3000, (error)=>{
        if (error) {
            console.log(error);
            return;
        }
        console.log("Servidor  rodando na porta 3000");
    })
})

/*
tabelas.init(conexao);

router(app);

app.listen(3000, (error) =>{
    if(error){
        console.log(error)
        return;
    }

    console.log("Passou");
});*/