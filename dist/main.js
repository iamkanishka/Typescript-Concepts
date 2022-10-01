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
function extractObject(obj, key) {
    return obj[key];
}
extractObject({ name: "kanishka", age: 77 }, 'age');
//# sourceMappingURL=main.js.map