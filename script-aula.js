const animais = document.getElementById("animais");
console.log(animais);

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName("grid-section");

console.log(gridSection);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

// retorna uma nodelist
// nodelist e HTML collection possuem propriedades diferentes
// HTML collection é "ao vivo" e nodelists são estáticas
const animaisImg = document.querySelectorAll(".animais img");

console.log(animaisImg);

const gridSectionHTML =
  document.getElementsByClassName("grid-section"); /* "ao vivo" tagname também*/
const gridSectionNode =
  document.querySelectorAll(
    ".grid-section"
  ); /* "estático, caso elementos sejam adicionados não atualiza automáticamente" */

primeiraUl.classList.add("grid-section");

console.log(gridSectionHTML[0]);
console.log(gridSectionNode[0]);

gridSectionNode.forEach(function (item, index) {
  console.log(item);
});
// transforma em array
const arrayGrid = Array.from(gridSectionHTML);

// Array-Like

/* 
HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList

É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)
 */
