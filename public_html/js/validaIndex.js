/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




function validartudo(){
    let d1, d2, d3;
    d1 = document.getElementById("data1").value;
    d2 = document.getElementById("data2").value;
    d3 = document.getElementById("data3").value;
    if (dataValida(d1)){
       document.getElementById("erro1").textContent= "apagar";
    }
    else{
        document.getElementById("erro1").textContent= "erro1 aqui!";
    }
    if (dataValida(d2)){
       document.getElementById("erro2").textContent= "apagar";
    }
    else{
        document.getElementById("erro2").textContent= "erro2 aqui!";
    }
    if (dataValida(d3)){
       document.getElementById("erro3").textContent= "apagar";
    }
    else{
        document.getElementById("erro3").textContent= "erro3 aqui!";
    }
}