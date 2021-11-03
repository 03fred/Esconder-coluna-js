
function carregamentoInicial(classe){
    esconderColunas(classe);
    $('input[type="checkbox"]').click(function (){
      if($(this).is(':checked')) {
        preencherClasse(classe, "."+$(this).attr("name"));
      }else{
        limparClasse(classe, "."+$(this).attr("name"));
      }
      esconderColunas(classe);
    });
}

 function limparClasse(classe, nameCheckBox){
    if(localStorage.getItem("hide-columns-"+classe)){
    let valores = "";
    $.each(localStorage.getItem("hide-columns-"+classe).split(','), function(i,v) {
       if(v != nameCheckBox){
         valores +=  v;
       }
    });
     localStorage.setItem("hide-columns-"+classe, valores);
    }
   }
  
   function preencherClasse(classe, valor){
    let valores = "";
    valores = localStorage.getItem("hide-columns-"+classe) ?  localStorage.getItem("hide-columns-"+classe) + `,${valor}` : valor;
    localStorage.setItem("hide-columns-"+classe, valores);
  } 
  
  function esconderColunas(classe){
    $('td, th').show();
    if(localStorage.getItem("hide-columns-"+classe)){
     $.each(localStorage.getItem("hide-columns-"+classe).split(','), function(i,v) {
      $(v).hide();
      v = v.replace(".", "").trim();
      $('input[name="'+v+'"]').prop('checked', true);
     });
    }
  }