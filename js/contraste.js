/*
Artigo : Contrste de cores
Autor : Orivelton Cesar - www.orivelton.com.br
*/

function contraste (value) {
  if (value == 'contrasteAzul') {
    document.getElementsByTagName("body")[0].setAttribute("id", "contrasteAzul");
  } else if (value == 'contrasteBranco') {
    document.getElementsByTagName("body")[0].setAttribute("id", "contrasteBranco");
  } else if (value == 'contrastePreto') {
    document.getElementsByTagName("body")[0].setAttribute("id", "contrastePreto");
  } else {
    document.getElementsByTagName("body")[0].removeAttribute("id");
  }
}
