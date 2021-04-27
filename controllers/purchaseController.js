let staticList = {
    "purchases": [{
        "name": "p1",
        "inCharge": "Daniel"
    },
    {
        "name": "p2",
        "inCharge": "Daniel"
    },
    ]
};

class PurchaseController {
    
    getList() {
        return staticList
    }

    insertPurchase(p) {
        console.log("inside: " + JSON.stringify(staticList.purchases[0]));
        return JSON.stringify(p);
    }

    deletePurchase(p) {
        console.log("Hola");
        let purchase = JSON.stringify(staticList.purchases[p]);
        staticList.purchases.splice[p];
        return purchase;
    }

}

module.exports = PurchaseController;