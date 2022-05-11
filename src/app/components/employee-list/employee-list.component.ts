import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  listEmployee:Employee[] = [
    {file: 1, surname: 'Correa', name: 'Fátima', salary: 50000, format: 'Remoto'},
    {file: 1, surname: 'Rechimon', name: 'Andrés', salary: 50000, format: 'Remoto'},
    {file: 1, surname: 'Shevchenko', name: 'Andriy', salary: 50000, format: 'Presencial'},
    {file: 1, surname: 'Forlán', name: 'Diego', salary: 50000, format: 'Remoto'},
    {file: 1, surname: 'Buffon', name: 'Gianluigi', salary: 50000, format: 'Presencial'}
  ];

  radioSelected:string = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  getTotal():number{
    return this.listEmployee.length;
  }

  getPre():number{
    return this.listEmployee.filter(list => list.format === 'Presencial').length;
  }

  getRem():number{
    return this.listEmployee.filter(list => list.format === 'Remoto').length;
  }

  radioChange(radioSel:string):void{
    this.radioSelected = radioSel;
  }
}
