let person:{
    name:string;
    age:number;
    hobbies:string[];
    role:[number,string]
}={
    name:"leela",
    age:31,
    hobbies:['sports', 'cooking'],
    role:[2, 'author']
};

person.role[0] =1;
person.role[1]='admin'

//typescript dosent understand the push/pop of a array, so its donsent throw error when the types are mismatched. 
person.role.push('admin');


//typescript gives error in the inteliscence if the types are mismatched
//person.role= [1,'kanishka','asdcbasdc']

for (let hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    
}