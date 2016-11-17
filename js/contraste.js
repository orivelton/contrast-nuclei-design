/*
Artigo : Contraste de cores
Autor : Orivelton Cesar - www.orivelton.com.br
*/

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



contraste(cookieTrue);



function contraste (valueIndex) {
  var setId = '';
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
  document.getElementsByTagName("body")[0].setAttribute("id", setId);
  document.cookie = "contraste=" + setId + "";

}
