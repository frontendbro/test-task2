const testModules = require('./test-module');
require('../css/app.css');

/********** Paste your code here! ************/

console.log('Paste your code here!');
console.log(testModules.hello);


const items = document.querySelectorAll('.card');
const itemsArray = Array.prototype.slice.call(items);

itemsArray.map(function(item) {
	item.addEventListener('click', toggleClass);
});

function toggleClass() {
	itemsArray.map(function(item) {
		item.classList.remove('visible');
	});
	this.classList.toggle('visible');
}