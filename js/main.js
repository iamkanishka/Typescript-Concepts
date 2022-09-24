var ROLES;
(function (ROLES) {
    ROLES["ADMIN"] = "ADMIN";
    ROLES[ROLES["AUTHOR"] = 0] = "AUTHOR";
    ROLES[ROLES["GUEST"] = 1] = "GUEST";
})(ROLES || (ROLES = {}));
//JS Enum
// const USER_ADMIN =1
// const USER_AUTHOUR=2
var person = {
    name: "leela",
    age: 31,
    hobbies: ['sports', 'cooking'],
    role: ROLES.ADMIN
};
if (person.role === ROLES.ADMIN) {
    console.log('role is admin');
}
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
