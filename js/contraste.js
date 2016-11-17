/*
Artigo : Contraste de cores
Autor : Orivelton Cesar - www.orivelton.com.br
*/
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
}
