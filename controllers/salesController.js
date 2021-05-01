const fs = require('fs');
let JSONlist = require('../data/salesList');

class SalesController {
    
    getSales() {
        return JSONlist;
    }

    insertSale(s) {
        console.log("inside: " + JSON.stringify(JSONlist.sales[0]));        
        JSONlist.sales.push(s);
        fs.writeFile('./data/salesList.json', JSON.stringify(JSONlist), (err) =>{
            if(err) throw err;
        })
        return JSON.stringify(u);
    }

    getSaleById(sale) {
        for(let i = 0; i < JSONlist.sales.length; i++){
            if(JSON.stringify(JSONlist.sales[i].id) === sale) {
                console.log("xx: " + JSON.stringify(JSONlist.sales[i]))
                return JSON.stringify(JSONlist.sales[i]);
            }
        }
        
        /*let stringList = JSON.stringify(JSONlist.users);
        console.log("str: " + stringList);
        let user = stringList.find((e) => e === email);
        return user;*/
    }    

}

module.exports = SalesController;