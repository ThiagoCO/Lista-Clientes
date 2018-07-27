function Remove(){
    var remove = document.querySelectorAll(".info-remove");

    remove.forEach(function(paciente){
        paciente.addEventListener("click", function(event){
            event.target.parentNode.classList.add("fadeOut");
            setTimeout(function() {
                var paiAlvo = event.target.parentNode;           
                paiAlvo.remove();
            }, 500);
            
            
         });
    });
}
//pacientes.forEach(function(paciente){
  //  paciente.addEventListener("dblclick", function(){
    //    console.log("fui clicado duas vezes");
      //  this.remove();
    //});
//});
//if (event.target.tagName == 'TD')