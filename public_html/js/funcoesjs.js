/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function teste(){
  alert("Funções funcionou!");
}
function dataValida(valor){
    let ano, mes, dia, hora, minuto;
    let tempo = [0,0]; // vetor de 2 posiçoes com valor 0 em cada uma
    let umaData;
    if (valor === ""){
        return false;
    }
    if (typeof(valor) !== "string"){
        return false;
    }
    umaData = valor.split("/");
    if (umaData.length === 1){
        umaData = valor.split("-");
        if (umaData.length === 1){
            return false;
        }
    }
    if (umaData[0].length>2){
      // padrao invertido
      ano = umaData[0];
      mes = umaData[1];
      dia = umaData[2];
    }
    else{
      // padrao normal
      ano = umaData[2];
      mes = umaData[1];
      dia = umaData[0];
    }
    tempo = dia.split("T");
    if (tempo.length > 1){
        dia = tempo[0];
        hora = tempo[1];
    }
    return true;
}

    


