function init(){

    var paciente = document.querySelectorAll(".paciente");

    for(var i = 0; i < paciente.length;i++){
        var infopeso = paciente[i].querySelector(".info-peso");
        var peso = infopeso.textContent;
        var infoaltura = paciente[i].querySelector(".info-altura");
        var altura = infoaltura.textContent;
        var infoimc = paciente[i].querySelector(".info-imc");
        var imc = calculaImc(peso,altura);
        if(peso <= 0 || peso > 350 || altura > 3 || altura < 0.5){
            infoimc.textContent = "Peso ou altura invalidos!!!";
           infoimc.classList.add("erro-de-preenchimento");
        }
        else{
           
            infoimc.textContent = imc;
            if(imc > 25){
                
                infoimc.classList.add("paciente-acimadopeso");
                Remove();
            }
            else{
                infoimc.classList.add("paciente-pesonormal");
                Remove();
            }      
      }
    }
    
}


function calculaImc(peso,altura){
    var imc =  peso / (altura * altura);
    return imc.toFixed(2);
}
