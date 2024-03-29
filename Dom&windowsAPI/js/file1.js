// HTML element selection in JavaScript with a CSS selector
const aboutUs = document.querySelector('.container p');
const text = document.querySelectorAll('.container p');

console.log(aboutUs);
console.log(text);


// HTML element selection with attributes in JavaScript
const aboutUs2 = document.getElementById('aboutus');
const containers = document.getElementsByClassName('container');
const paragraphs = document.getElementsByTagName('p');

console.log(aboutUs2);
console.log(containers);
console.log(paragraphs);


// HTML element properties
const container = document.querySelector('.container');
const aboutus3 = document.getElementById('aboutus');

// Attributes
console.log(aboutus3.getAttribute('id'));
aboutus3.setAttribute('id', 'newId');

// relative
console.log(container.children);
console.log(container.parentElement);

// List of classes
console.log(container.classList);
container.classList.add('container--active');
container.classList.remove('container--active');
container.classList.toggle('container--active');
container.className = "container class1 class2 class3";



// Element manipulation
container.innerHTML = '<span>Hello</span>';
container.remove();