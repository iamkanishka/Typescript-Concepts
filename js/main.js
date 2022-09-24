var person = {
    name: "leela",
    age: 31,
    hobbies: ['sports', 'cooking']
};
var favorites;
favorites = ['animals'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
