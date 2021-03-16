const datos = []
var cont;
d3.dsv( ";", "./data/pets-citizens.csv", data =>{
  //console.log(data);
  datos.push(data);
});

function generateT(f){
  var table = document.getElementById("table");
  if(table.rows.length != 1){
      for(i=0;i<table.rows.length;i++){
      table.deleteRow(1);
          generateT(f);
      }
  }
  else{
  for(i=f;i<=f+9;i++){
      try{
  var linea = table.insertRow(1);
  var cell1 = linea.insertCell(0);
  var cell2 = linea.insertCell(1);
  var cell3 = linea.insertCell(2);
  var cell4 = linea.insertCell(3);
  var cell5 = linea.insertCell(4);
  var cell6 = linea.insertCell(5);
  cell1.innerHTML = datos[i].microchip;
  cell2.innerHTML = datos[i].neighborhood;
  cell3.innerHTML = datos[i].potentDangerous;
  cell4.innerHTML = datos[i].size;
  cell5.innerHTML = datos[i].sex;
  cell6.innerHTML = datos[i].species;
      }
      catch{
          
  }
    }
  }
}

function first(){
    cont = 0;
    generateT(cont);
}

function last(){
    cont = datos.length-10;
    generateT(cont);
}

function next(){
    if(cont>=datos.length-10){
       cont = datos.length-10;
       }
    else{
    cont = cont+10;
    }
    generateT(cont);
}

function past(){
    if(cont<=0){
       cont = 0;
       }
    else{
    cont = cont-10
    }
    generateT(cont);
}

function check(){
    var micr = document.getElementById("Microchip").value.toUpperCase();
     generateT();
    for(i=0;i<datos.length;i++){
        if(datos[i].microchip === micr){
                    datos[i].microchip = document.getElementById("Microchip").value.toUpperCase();
                    datos[i].neighborhood = document.getElementById("Neighborhood").value.toUpperCase();
                    datos[i].potentDangerous = document.getElementById("danger").value.toUpperCase();
                    datos[i].size = document.getElementById("Size").value.toUpperCase();
                    datos[i].sex = document.getElementById("Sex").value.toUpperCase();
                    datos[i].species = document.getElementById("Species").value.toUpperCase();
            i = datos.length-1;
        }
        else if(i === datos.length-1){
        add();
        }
}
}
function add(){
    var obj = {
    microchip:document.getElementById("Microchip").value.toUpperCase(),
    neighborhood:document.getElementById("Neighborhood").value.toUpperCase(),
    potentDangerous:document.getElementById("danger").value.toUpperCase(),
    size:document.getElementById("Size").value.toUpperCase(),
    sex:document.getElementById("Sex").value.toUpperCase(),
    species:document.getElementById("Species").value.toUpperCase()
    }
  datos.push(obj);
}
      
function search(){
    var obs = (document.getElementById("value").value).toUpperCase();
    generateT();
    for(i=0;i<datos.length;i++){
        if(datos[i].microchip === obs || datos[i].neighborhood === obs || datos[i].potentDangerous === obs || datos[i].size === obs|| datos[i].sex === obs || datos[i].species === obs){
             var linea = table.insertRow(1);
  var cell1 = linea.insertCell(0);
  var cell2 = linea.insertCell(1);
  var cell3 = linea.insertCell(2);
  var cell4 = linea.insertCell(3);
  var cell5 = linea.insertCell(4);
  var cell6 = linea.insertCell(5);
  cell1.innerHTML = datos[i].microchip;
  cell2.innerHTML = datos[i].neighborhood;
  cell3.innerHTML = datos[i].potentDangerous;
  cell4.innerHTML = datos[i].size;
  cell5.innerHTML = datos[i].sex;
  cell6.innerHTML = datos[i].species;
           }
    }
}