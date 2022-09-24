var person = {
    name: "leela",
    age: 31,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};
//typescript dosent understand the 
person.role[0] = 1;
person.role[1] = 'admin';
person.role.push('admin');
//typescript gives error in the inteliscence if the types are mismatched
//person.role= [1,'kanishka','asdcbasdc']
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
