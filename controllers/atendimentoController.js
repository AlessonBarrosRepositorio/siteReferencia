class AtendimentoController{
    buscar(){
        return "Buscando atendimento...";
    }
    criar(){
        return 'Criando Atendimento...';
    }
    alterar(id){
        return "Alterando atendimento "+id+" ...";
    }
    deletar(id){
        return "Deletando atendimento número("+id+")...";
    }
}

module.exports = new AtendimentoController();