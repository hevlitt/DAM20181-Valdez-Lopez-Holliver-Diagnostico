var user,us;
function validar() {
  var password;
  user=document.getElementById('user').value;
  password=document.getElementById('password').value;
  localStorage.setItem("user",user=document.getElementById('user').value);
  if (user=="" || password=="") {
    alert("Todos los campos son obligatorios");
    return false;
  }
  else if(user!=="admin" || password!=="admin"){
    alert("El usuario o contraseña son incorrectos");
    return false;
  }
}//validar

function obtF(){
  document.getElementById('l1').innerHTML="Bienvenido "+localStorage.getItem("user");
}

function justNumbers(e){
  var keynum = window.event ? window.event.keyCode : e.which;
  if ((keynum == 8) || (keynum == 46)){
    return true;
  }
    return /\d/.test(String.fromCharCode(keynum));
}

function factorial(){
  var n=0,r=1;
  n=document.getElementById('num').value;
  for(var i=1;i<=n;i++){
    r=r*i;
  }
  alert(r);
}
