var input1 = document.querySelector('#number1');
var input2 = document.querySelector('#number2');
var button = document.querySelector('#button');
var add = function (number1, number2) {
    return number1 + number2;
};
button.addEventListener('click', function () {
    console.log(input1.value);
    console.log(input2.value);
    console.log(add(+input1.value, +input2.value));
});
