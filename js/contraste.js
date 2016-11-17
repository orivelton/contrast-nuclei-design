/*
Artigo : Contraste de cores
Autor : Orivelton Cesar - www.orivelton.com.br
*/

// Verificação do cookie
var c_name_contrasteBranco = document.cookie.indexOf('contrasteBranco');
var c_name_contrastePreto = document.cookie.indexOf('contrastePreto');
var c_name_contrasteAzul = document.cookie.indexOf('contrasteAzul');

if (c_name_contrasteBranco == 0) {
  cookieTrue = 1;
} else if (c_name_contrastePreto == 0) {
  cookieTrue = 2;
} else if (c_name_contrasteAzul == 0) {
  cookieTrue = 3;
} else {
  cookieTrue = '';
}
//Function no load da página
contraste(cookieTrue);

//Value passado pelo onclick do link (valueIndex)
function contraste (valueIndex) {
  var setId = '';
  //Verificação de qual contraste foi selecionado
  switch (valueIndex) {
    case 1:
    setId = 'contrasteBranco'
    break;
    case 2:
    setId = 'contrastePreto'
    break;
    case 3:
    setId = 'contrasteAzul'
    break;
    default:
    setId = ''
  }
  // set do ID do contraste escolhido no body
  document.getElementsByTagName("body")[0].setAttribute("id", setId);
  // Guardando o cookie do contraste
  document.cookie = "contraste=" + setId + "";
}
