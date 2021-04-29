$("#nav1").click(() => {
    console.log("u clicked me");
})

$(document).ready(() => {
    $("#bienvenida").append("Daniel");
})

$('#regNavBar').click(() => {
    axios.get('http://localhost:3000/api/users')
    .then(response => {
        const users = response.data;
        console.log("users: " + JSON.stringify(users));
    })
    .catch(err => {console.log(err)})
})

let regBtn = document.getElementById('regBtn');
regBtn.disabled = true;
let regForm = document.getElementById('registro');

regForm.addEventListener('change',  () => {
    let name = document.getElementById('nombre').value;
    let aps = document.getElementById('aps').value;
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd1').value;
    let area = document.getElementById('area').value;
    console.log("n: " + name);
    console.log("a: " + aps);
    console.log("e: " + email);
    console.log("p: " + pwd);
    console.log("ar: " + area);
    if(name==''||aps==''||email==''||pwd==''||area=='Selecciona tu área'){
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
    let name = document.getElementById('nombre').value;
    let aps = document.getElementById('aps').value;
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd1').value;
    let area = document.getElementById('area').value;
    axios.post('http://localhost:3000/api/users', {
        nombre: name,
        apellidos: aps,
        correo: email,
        pwd: pwd,
        area: area
      })
      .then((response) => {
        alert("Usuario registrado con éxito");
        console.log(name);
        console.log(response);
      }, (error) => {
        alert("Ocurrió un error: " + error);
      });
})