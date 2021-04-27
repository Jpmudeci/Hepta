const { response } = require('express');
const express = require('express');
const router = express.Router();
const PurchaseController = require('../controllers/purchaseController');
const prchsCtrl = new PurchaseController();

router.get('/purchases/', (req, res) => {
    let purchaseList = prchsCtrl.getList();
    res.status(200).send(purchaseList);
})

router.post('/purchases/', (req, res) => {
    let body = req.body;
    console.log("b: " + JSON.stringify(body.name));
    let newP;
    if(body.name != null){
        newP = prchsCtrl.insertPurchase(body);
        if(newP){
            res.status(200).send("Éxito: " + newP);
        }
        res.status(400).send("Algo falló");
    }
    else{
        res.status(400).send("Falta información");
    }  
})

router.delete('/purchases/', (req, res) =>{
    let purchase = req.query.id;
    if(!purchase){
        res.status(400).send("Nada por borrar");
    }
    let p = prchsCtrl.deletePurchase(purchase);
    if(p)
        res.status(200).send("Se eliminó el registro: " + p);
    else
        res.status(400).send("Ocurrió un error");    
})

module.exports = router;