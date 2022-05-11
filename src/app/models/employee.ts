export class Employee{
    file:number;
    surname:string;
    name:string;
    salary:number;
    format:string;

    constructor(file: number, surname: string, name: string, salary: number, format:string){
        this.file = file;
        this.surname = surname;
        this.name = name;
        this.salary = salary;
        this.format = format;
    }
}