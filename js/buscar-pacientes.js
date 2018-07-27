var botaoAdicionar = document.querySelector("#buscar-pacientes");

console.log('Teste de mudanca');

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
   
    xhr.open("GET", "js/listaPacientes.json", true);

    xhr.addEventListener("load",function(){
        var resposta = xhr.responseText;
        console.log(resposta);
        console.log(typeof resposta);

        var pacientes = JSON.parse(resposta);
        console.log(pacientes);
        console.log(typeof pacientes);

       pacientes.forEach(function(paciente){
            adicionarPacienteNaTabela(paciente);    
       });
    });

    xhr.send();
});