const { response } = require('express');
const express = require('express');
const router = express.Router();
const InventoryController = require('../controllers/inventoryController');
const inventoryCtrl = new InventoryController();

router.get('/inventory/', (req, res) => {
    let inventoryList = inventoryCtrl.getInventory();
    res.status(200).send(inventoryList);
})

router.post('/inventory/', (req, res) => {
    let body = req.body;
    console.log("b: " + JSON.stringify(body));
    let newS;
    if(body.cliente != null && body.user != null && body.product != null && body.cant != null && body.area != null){
        newS = inventoryCtrl.insertInventory(body);
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