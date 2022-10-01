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
class dataStorage {
    constructor() {
        this.data = [];
    }
    addData(item) {
        this.data.push(item);
    }
    removeData(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getData() {
        return [...this.data];
    }
}
const stringStorage = new dataStorage();
stringStorage.addData('kanishka');
stringStorage.addData('naik');
stringStorage.addData('Gadgetguy');
stringStorage.addData('saxasxasx');
stringStorage.removeData('naik');
console.log(stringStorage.getData());
const numberStorage = new dataStorage();
numberStorage.addData(1);
numberStorage.addData(2);
numberStorage.addData(3);
numberStorage.addData(3);
numberStorage.removeData(2);
console.log(numberStorage.getData());
function addCourse(title, description, addedDate) {
    let data = {};
    data.title = title;
    data.description = description,
        data.addedDate = addedDate;
    return data;
}
let names = ['Kannu', 'laial'];
//# sourceMappingURL=main.js.map