// ! Recorrido de DOM 

const navegacion = document.querySelector('.navegacion');

//console.log(navegacion.firstElementChild)
//console.log(navegacion.lastElementChild)


// console.log(navegacion.childNodes) // ?Los espacios en blanco son considerados elementos
// console.log(navegacion.children) // ?Los espacios en blanco son considerados elementos



// console.log(navegacion.children[2])
// console.log(navegacion.children[1].nodeType)

//!Mas con cards
const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom'

//?Vamos por las img 
/* 
card.children[0].src = 'img/jsposter.jpg';
console.log(card.children[0]); */


//!! Traversing the Hijo al padre

//console.log(card.parentNode);
// console.log(card.parentElement.parentElement.parentElement);

//console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

// const ultimoCard = document.querySelector('.card:nth-child(4)');
// console.log(ultimoCard.previousElementSibling)