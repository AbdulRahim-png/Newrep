console.log(document.all)
console.log(document.getElementById('main-header'))
var headerTitle = document.getElementById('header-title')
console.log(headerTitle)
var items =document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = "Hello 2"
//items[3].computedStyleMap.backgroundColor = 'yellow';
//items[1].style.fontWeight = 'bold'
//items[1].style.backgroundColor = 'yellow'
//items[2].style.backgroundColor = 'green'
//items[2].style.fontWeight = 'bold'
//items[0].style.fontWeight = 'bold'
//items[3].style.fontWeight = 'bold'
//Gtelement by tagname
var li = document.getElementsByTagName('li')
//var items =document.getElementsByClassName('list-group-item');
/*console.log(li);
console.log(li[1]);
li[1].textContent = "item 2"
li[3].computedStyleMap.backgroundColor = 'yellow';
li[1].style.fontWeight = 'bold'
li[1].style.backgroundColor = 'green'
li[2].style.backgroundColor = 'green'
li[2].style.fontWeight = 'bold'
li[0].style.fontWeight = 'bold'
li[3].style.fontWeight = 'bold'
var thirditem = document.querySelector
('.list-group-item:nth-child(3)');
thirditem.style.color = 'green';
*/
//parentelemnt
var itemlists = document.querySelector('#items');
console.log(itemlists.parentNode);
itemlists.parentNode.style.backgroundColor = '#f4f4f4';
//childnodes
console.log(itemlists.children);
//firstChild
console.log(itemlists.firstElementChild);
itemlists.firstElementChild.textContent = 'Hello 1';
//CreateElemets
//create div
var newdiv = document.createElement('div');
newdiv.className = 'Hello';
newdiv.id = 'hello1';
console.log(newdiv);
newdiv.setAttribute('title','Hello');
var newdivText = document.createTextNode('Hello World');
newdiv.appendChild(newdivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newdiv);
newdiv.style.fontSize = '30px';
container.insertBefore(newdiv,h1);