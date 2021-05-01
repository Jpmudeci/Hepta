const fs = require('fs');
let JSONlist = require('../data/productsList');

class InventoryController {
    
    getproducts() {
        return JSONlist;
    }

    insertSale(s) {
        console.log("inside: " + JSON.stringify(JSONlist.products[0]));        
        JSONlist.products.push(s);
        fs.writeFile('./data/productsList.json', JSON.stringify(JSONlist), (err) =>{
            if(err) throw err;
        })
        return JSON.stringify(u);
    }

    getProductById(sale) {
        for(let i = 0; i < JSONlist.products.length; i++){
            if(JSON.stringify(JSONlist.products[i].id) === sale) {
                console.log("xx: " + JSON.stringify(JSONlist.products[i]))
                return JSON.stringify(JSONlist.products[i]);
            }
        }
        
        /*let stringList = JSON.stringify(JSONlist.users);
        console.log("str: " + stringList);
        let user = stringList.find((e) => e === email);
        return user;*/
    } 
    
    deleteProduct(p) {
        console.log("Hola");
        let product = JSON.stringify(JSONlist.product[p]);
        JSONlist.products.splice(u);
        //console.log("Lista: " + JSON.stringify(JSONlist));
        fs.writeFile('./data/productsList.json', JSON.stringify(JSONlist), (err) => {
            if(err) throw err;
        });
        return user;
    }

}

module.exports = InventoryController;