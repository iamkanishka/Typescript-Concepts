enum ROLES {
    ADMIN="ADMIN",
    AUTHOR=0,
    GUEST 
}

//JS Enum
// const USER_ADMIN =1
// const USER_AUTHOUR=2

let person={
    name:"leela",
    age:31,
    hobbies:['sports', 'cooking'],
    role: ROLES.ADMIN
};

if(person.role===ROLES.ADMIN){
    console.log('role is admin');
    
}

for (let hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    
}