
var botao = document.querySelector("#botao-paciente");
botao.addEventListener("click",function(event){
    event.preventDefault();
   
    var form = document.querySelector("#adicionar-paciente");
    
    //pegar as informações do form
    var paciente = obtemPacienteDoFormulario(form);
    //Montar td 
    
        //incluir td na tebela
    var validador = validaPaciente(paciente);    
    if(validador.length > 0){
        exibeMensagemDeErro(validador);
        return;
    }
        adicionarPacienteNaTabela(paciente);      
        //LIMPA O FORMULARIO
        mensagem = document.querySelector("#mensagem-erro");
        mensagem.textContent = "";
        form.reset();
       
        
    
    
     
});
function adicionarPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    init();
    Remove();
}
function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso")); 
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));
    pacienteTr.appendChild(montaTd("X","info-remove"))
    

    return pacienteTr;
}
function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPeso(peso){
    if(peso > 0 && peso < 1000){
        return true;
    }
    else{
        return false;
    }
}
function validaAltura(altura){
    if(altura > 0 && altura < 3){
        return true;
    }
    else{
        return false;
    }
}
function validaPaciente(paciente){
    var errors = [];
    if(!validaAltura(paciente.altura)) errors.push("Altura invalida");        
    if(!validaPeso(paciente.peso)) errors.push("Peso invalido");                  
    if(paciente.nome.length == 0) errors.push("O campo nome não pode ser vazio");
    if(paciente.gordura.length == 0) errors.push("O campo gordura não pode ser vazio");
    if(paciente.peso.length == 0) errors.push("O campo Peso não pode ser vazio");
    if(paciente.altura.length == 0) errors.push("O campo altura não pode ser vazio");
    
    return errors;
}
function exibeMensagemDeErro(validador){
    var erro = document.querySelector("#mensagem-erro");
    erro.innerHTML = "";
    validador.forEach(valida => {
        var li = document.createElement("li");
        li.textContent = valida;
        erro.appendChild(li);
    });

}