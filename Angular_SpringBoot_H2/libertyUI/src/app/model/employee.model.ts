export interface Employee{
    eid:number; //optional for creat
    name:string;
    salary:number;
    email:string;
    password:string;
    profileImage:File | null;
    createAt:Date;

}