class Tabelas{
    async init(pool){
        this.pool = pool;
        await this.criartabelasAtendimentos();
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

        let conn;
        try{
            conn = await this.pool.getConnection();
            await conn.query(sql);
            console.log("Tabela Atendimentos Criada!!!");
        }catch (error){
            console.log("Erro ao Criar Tabela Atendimento");
            console.log(error.message);
        }finally{
            if (conn) conn.end();
        }/*
        this.pool.query(sql, (error) => {
            if(error) {
                console.log("error tabela atendimento");
                console.log(error.messege());
                return;
            }
            console.log("criou a tabela atendimentos");
        });*/

    }
}

module.exports = new Tabelas();