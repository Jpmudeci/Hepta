const fs = require('fs');
let JSONlist = require('../data/usersList');

class UserController {
    
    getUsers() {
        return JSONlist;
    }

    insertUser(u) {
        console.log("inside: " + JSON.stringify(JSONlist.users[0]));        
        JSONlist.users.push(u);
        fs.writeFile('./data/usersList.json', JSON.stringify(JSONlist), (err) =>{
            if(err) throw err;
        })
        return JSON.stringify(u);
    }

    getUserByEmail(email) {
        for(let i = 0; i < JSONlist.users.length; i++){
            if(JSON.stringify(JSONlist.users[i].email) === email) {
                console.log("xx: " + JSON.stringify(JSONlist.users[i]))
                return JSON.stringify(JSONlist.users[i]);
            }
        }
        
        /*let stringList = JSON.stringify(JSONlist.users);
        console.log("str: " + stringList);
        let user = stringList.find((e) => e === email);
        return user;*/
    }

    deleteUser(u) {
        console.log("Hola");
        let user = JSON.stringify(JSONlist.users[u]);
        JSONlist.users.splice(u);
        //console.log("Lista: " + JSON.stringify(JSONlist));
        fs.writeFile('./data/usersList.json', JSON.stringify(JSONlist), (err) => {
            if(err) throw err;
        });
        return user;
    }

}

module.exports = UserController;