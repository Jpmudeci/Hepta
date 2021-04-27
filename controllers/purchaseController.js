const fs = require('fs');
let JSONlist = require('../data/purchaseList');

class PurchaseController {
    
    getList() {
        return JSONlist;
    }

    insertPurchase(p) {
        console.log("inside: " + JSON.stringify(JSONlist.purchases[0]));        
        JSONlist.purchases.push(p);
        fs.writeFile('./data/purchaseList.json', JSON.stringify(JSONlist), (err) =>{
            if(err) throw err;
        })
        return JSON.stringify(p);
    }

    deletePurchase(p) {
        console.log("Hola");
        let purchase = JSON.stringify(JSONlist.purchases[p]);
        JSONlist.purchases.splice(p);
        //console.log("Lista: " + JSON.stringify(JSONlist));
        fs.writeFile('./data/purchaseList.json', JSON.stringify(JSONlist), (err) => {
            if(err) throw err;
        });
        return purchase;
    }

}

module.exports = PurchaseController;