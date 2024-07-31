const mariadb = require("mariadb");

const conexao = mariadb.createPool({
    host:"localhost",
    port:3306,
    user:"root",
    password:"",
    database:"controle_atendimentos"
    //connectionLimit: 5 // Número máximo de conexões no pool
});

module.exports = conexao;
