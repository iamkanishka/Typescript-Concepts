let button = document.querySelector('button')!;


function clickhandler(message:string){
    console.log('clicked');
    
}


if(button){
button.addEventListener('click',clickhandler.bind(null,'you are clicked'))
}

let map = new Map()
console.log('map'+map);
//THis is Analytics Comments 

