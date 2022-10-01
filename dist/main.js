"use strict";
function getCountandDescribe(element) {
    let text = 'Got No Value';
    if (element.length == 1) {
        text = 'Got 1 value';
    }
    if (element.length > 1) {
        text = 'Got' + element.length + 'value';
    }
    return [element, text];
}
console.log(getCountandDescribe(['zdfv']));
//# sourceMappingURL=main.js.map