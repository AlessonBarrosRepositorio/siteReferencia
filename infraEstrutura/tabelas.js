class Tabelas{
    init(conexao){
        this.conexao = conexao;
        this.criartabelasAtendimentos();
    }

    criartabelasAtendimentos(){
        const sql =
        `
            CREATE TABLE IF NOT EXISTS atendimentos (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            DATA DATE,
            servico VARCHAR(100),
            cliente VARCHAR(250),
            STATUS ENUM("ativo","realizado","cancelado") DEFAULT "ativo"
            );
        `;
        this.conexao.query(sql, (error) => {
            if(error) {
                console.log("error tabela atendimento");
                console.log(error.messege());
                return;
            }
            console.log("criou a tabela atendimentos");
        });

    }
}

module.exports = new Tabelas();