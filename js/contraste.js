/*
Artigo : Contraste de cores
Autor : Orivelton Cesar - www.orivelton.com.br
*/

//Selecionando os links de contraste
var linksContraste = document.querySelectorAll('nav a[data-contraste]');

//Function click passando o valor do data-contraste para a function contraste setar o Id no body
linksContraste.forEach(linksContraste => linksContraste.addEventListener('click', function() {
    var dataContraste = this.dataset.contraste; // pegando o data-contraste da tag 'a'
    contraste(dataContraste); // Chamando  a function contraste com um parâmetro passado pelo data-contraste da tag 'a'
  }
));

function contraste(dataContraste) {
  var setId;
  //Verificação de qual contraste foi selecionado
  if (dataContraste == 1) {
    setId = 'contrasteBranco';
  } else if (dataContraste == 2) {
    setId = 'contrastePreto';
  } else if (dataContraste == 3) {
    setId = 'contrasteAzul';
  } else {
    setId = ''
  }
  // setando o ID do contraste escolhido no body
  document.querySelector("body").setAttribute("id", setId);
  // Guardando o cookie do contraste
  document.cookie = "contraste=" + setId + "";
}

// Verificação do cookie
var cookieContrasteBranco = document.cookie.indexOf('contrasteBranco');
var cookieContrastePreto = document.cookie.indexOf('contrastePreto');
var cookieContrasteAzul = document.cookie.indexOf('contrasteAzul');

//Verificando o cookie setado anteriormente
var cookieTrue = '';
if (cookieContrasteBranco != -1) {
  cookieTrue = 1;
} else if (cookieContrastePreto != -1) {
  cookieTrue = 2;
} else if (cookieContrasteAzul != -1) {
  cookieTrue = 3;
} else {
  cookieTrue = '';
}
//Chamando a function contraste com o valor do cookie guardado
contraste(cookieTrue);
