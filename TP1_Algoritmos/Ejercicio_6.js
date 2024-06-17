
meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto2","Septiembre","Octure","Noviembre","Diciembre"]

let mes = parseInt(prompt("Ingrese el numero de algun mes"));
if (mes >= 1 && mes <= 12) {
     
  alert(meses[mes - 1]);
} 
else {
   
  alert("ese mes no existe");
}

