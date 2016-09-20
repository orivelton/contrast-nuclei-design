/*
Artigo : Contrste de cores
Autor : Orivelton Cesar - www.orivelton.com.br
*/


var contrasteSet = document.cookie;

if (contrasteSet.indexOf('contrastePreto') != -1) {
    document.getElementsByTagName("body")[0].setAttribute("id", "contrastePreto");
}

if (contrasteSet.indexOf('contrasteBranco') != -1) {
    document.getElementsByTagName("body")[0].setAttribute("id", "contrasteBranco");
}

if (contrasteSet.indexOf('contrasteAzul') != -1) {
    document.getElementsByTagName("body")[0].setAttribute("id", "contrasteAzul");
}



function semContraste () {
  document.getElementsByTagName("body")[0].setAttribute("id", "semContraste");
  document.cookie= "contraste=semContraste";
}

function contrastePreto () {
  document.getElementsByTagName("body")[0].setAttribute("id", "contrastePreto");
  document.cookie= "contraste=contrastePreto";
}

function contrasteBranco () {
  document.getElementsByTagName("body")[0].setAttribute("id", "contrasteBranco");
  document.cookie= "contraste=contrasteBranco";
}

function contrasteAzul () {
  document.getElementsByTagName("body")[0].setAttribute("id", "contrasteAzul");
  document.cookie= "contraste=contrasteAzul";
}
