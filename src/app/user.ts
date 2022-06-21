export class User 
{
    constructor(
        public name:string,
        // public lastname:string,
        public email: string,
        public phone: number,
        public gender:string,
        public street:string,
        public city:string,
        public state:string,
        public subscribe:boolean
    ) {}
}