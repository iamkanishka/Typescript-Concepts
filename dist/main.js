"use strict";
let button = document.querySelector('button');
function clickhandler(message) {
    console.log('clicked');
}
if (button) {
    button.addEventListener('click', clickhandler.bind(null, 'you are clicked'));
}
let map = new Map();
console.log('map' + map);
//# sourceMappingURL=main.js.map