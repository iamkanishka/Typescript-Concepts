namespace App{
export interface IPost{
    title:string;
    description:string
}
export class Post implements IPost{
    title:string;
    description:string;
    constructor(){
        this.title='My First Post'
        this.description='First Post Descriptionn'
    }
}

}