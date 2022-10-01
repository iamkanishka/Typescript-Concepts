"use strict";
let names = [];
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolve string Data');
    }, 6767);
});
promise.then((data) => {
    data.split('');
});
//# sourceMappingURL=main.js.map