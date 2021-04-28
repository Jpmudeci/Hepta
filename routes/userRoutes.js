const { response } = require('express');
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const userCtrl = new UserController();

router.get('/users/', (req, res) => {
    let userList = userCtrl.getUsers();
    res.status(200).send(userList);
})

router.post('/users/', (req, res) => {
    let body = req.body;
    console.log("b: " + JSON.stringify(body));
    let newU;
    if(body.nombre != null && body.apellidos != null && body.correo != null && body.pwd != null && body.area != null){
        newU = userCtrl.insertUser(body);
        if(newU){
            res.status(200).send("Éxito: " + newU);
        }
        res.status(400).send("Algo falló");
    }
    else{
        res.status(400).send("Falta información");
    }  
})

router.delete('/users/', (req, res) =>{
    let user = req.query.id;
    if(!user){
        res.status(400).send("Nada por borrar");
    }
    let u = userCtrl.deleteuser(user);
    if(u)
        res.status(200).send("Se eliminó el registro: " + u);
    else
        res.status(400).send("Ocurrió un error");    
})

module.exports = router;