const { response } = require('express');
const express = require('express');
const router = express.Router();
const SalesController = require('../controllers/salesController');
const salesCtrl = new SalesController();

router.get('/sales/', (req, res) => {
    let salesList = salesCtrl.getSales();
    res.status(200).send(salesList);
})

router.post('/sales/', (req, res) => {
    let body = req.body;
    console.log("b: " + JSON.stringify(body));
    let newS;
    if(body.cliente != null && body.user != null && body.product != null && body.cant != null && body.area != null){
        newS = salesCtrl.insertSale(body);
        if(newS){
            res.status(200).send("Éxito: " + newS);
        }
        res.status(400).send("Algo falló");
    }
    else{
        res.status(400).send("Falta información");
    }  
})

module.exports = router;