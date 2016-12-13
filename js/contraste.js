/*
Artigo : Contraste de cores
Autor : Orivelton Cesar - www.orivelton.com.br
*/

//Selecionando os links de cookieContrasteAzul
var linksContraste = document.querySelectorAll('nav a[data-contraste]');
//Valor passado pela function do data-contraste
linksContraste.forEach(linksContraste => linksContraste.addEventListener('click', function() {
    var dataContraste = this.dataset.contraste;
    contraste(dataContraste);
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
  // set do ID do contraste escolhido no body
  document.querySelector("body").setAttribute("id", setId);
  // Guardando o cookie do contraste
  document.cookie = "contraste=" + setId + "";
}


// Verificação do cookie
var cookieContrasteBranco = document.cookie.indexOf('contrasteBranco');
var cookieContrastePreto = document.cookie.indexOf('contrastePreto');
var cookieContrasteAzul = document.cookie.indexOf('contrasteAzul');
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

//Function no load da página
contraste(cookieTrue);
