import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-meter',
  templateUrl: './employee-meter.component.html',
  styleUrls: ['./employee-meter.component.css']
})
export class EmployeeMeterComponent implements OnInit {
@Input() all!:number;
@Input() rem!:number;
@Input() pre!:number;

@Output() countRadioChange = new EventEmitter<string>()

  radioSelected:string = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  radioChange():void{
    this.countRadioChange.emit(this.radioSelected);
  }
}
