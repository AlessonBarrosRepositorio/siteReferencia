//const router = requere("express").Router
const {Router} = require("express");
const router = Router();

const atendimentoController = require("../controllers/atendimentoController")

//get post put deletd

router.get("/atendimentos", (req, res) =>{
    res.send("Chegou Aqui, estamos listando todos os atendimentos");
});

router.post("/atendimentos", (req,res) => {
    res.send("chegou aqui, estamos fazendo um novo atendimento");
});

router.put("/atendimento/:id", (req, res) =>{
        const { id } = req.params;
    res.send(`Chegou Aqui, estamos atualizando o atendimento ${id}`);
});

router.delete("/atendimento/:id", (req,res) => {
        const { id } = req.params;
    res.send(`chegou aqui, estamos deletenado um atendimento ${id}`);
});

module.exports = router;