$("#nav1").click(() => {
    console.log("u clicked me");
})

$(document).ready(() => {
    $("#bienvenida").append("Daniel");
})

/*$('#regNavBar').click(() => {
    axios.get('http://localhost:3000/api/users')
    .then(response => {
        const users = response.data;
        console.log("users: " + JSON.stringify(users));
    })
    .catch(err => {console.log(err)})
})*/

let regBtn = document.getElementById('regBtn');
regBtn.disabled = true;
let regForm = document.getElementById('registro');

regForm.addEventListener('change',  () => {
    let name = $('#nombre').val();
    let aps = $('#aps').val();
    let email = $('#email').val();
    let pwd = $('#pwd').val();
    let area = $('#area').val();
    console.log("n: " + name);
    console.log("a: " + aps);
    console.log("e: " + email);
    console.log("p: " + pwd);
    console.log("ar: " + area);
    if(name != '' || aps != '' || email != '' || pwd != ''){
        regBtn.disabled = true;
        console.log("entró");
    }        
    else{
        regBtn.disabled = false;
        console.log("done");
    }        
})

regBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("hola");
    axios.post('http://localhost:3000/api/users', {
        nombre: "xxx12333444555",
        apellidos: "Lermaa",
        correo: "lermaeae20@gmail.com",
        pwd: "12345",
        area: "Compras"
      })
      .then((response) => {
        alert("Usuario registrado con éxito");
        console.log(response);
      }, (error) => {
        alert("Ocurrió un error: " + error);
      });
})