// let header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';

// let items = document.getElementById('add');
// items.style.fontWeight = 'bold';
// items.style.color = 'green';

// let list = document.getElementsByClassName('list-group-item');
// list[2].style.backgroundColor = 'green';

// for (let i = 0; i < list.length; i++) {
//     list[i].style.fontWeight = 'bold';
// }

// list[4].style.listStyle = 'none';

// let tag = document.getElementsByTagName('li');
// tag[4].style.listStyle = 'none';

// let secondItem = document.querySelector('li:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// let thirdItem = document.querySelector('li:nth-child(3)');
// thirdItem.style.visibility = 'hidden';

// let listItems = document.querySelectorAll('li');
// listItems[1].style.color = 'green';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'green';
// }

let items = document.querySelector('#items');
let item = document.querySelector('li:nth-child(2)');

items.parentElement.style.backgroundColor = '#f4f4f4';
items.children[2].style.backgroundColor = 'green';
items.firstElementChild.style.color = 'green';
items.lastElementChild.textContent = 'Last';

item.nextElementSibling.style.color = 'yellow';
item.previousElementSibling.textContent = 'First';

let newDiv = document.createElement('div');
newDiv.setAttribute('title', 'hello');

let newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('h1');
container.insertBefore(newDiv, h1);

items.insertBefore(newDiv, items.firstElementChild);