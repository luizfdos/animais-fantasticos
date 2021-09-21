// Retorne no console todas as imagens do site
console.log(document.getElementsByTagName("img"));

// retorne no console apenas as imagens que começaram com a palavra imagem
console.log(document.querySelectorAll('[src^="img/imagem"]'));

// Selecione todos os links internos (onde o href começa com #)
const internalLinks = document.querySelectorAll('[href^="#"]');

// Selecione o primeiro h2 dentro de .animais-descrição
const firstH2 = document.querySelector(".animais-descricao h2");
console.log(firstH2);

// selecione o último p do site

const everyP = document.querySelectorAll("p");

const lastP = everyP[everyP.length - 1];
console.log(lastP);
