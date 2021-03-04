"use strict";

var page = function page(pagina) {
  localStorage.setItem("numero", pagina);
  window.open("../html/historia.html");
};

var f1 = function f1(a, b) {
  return a + b;
};