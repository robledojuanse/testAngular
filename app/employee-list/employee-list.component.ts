import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Employee } from './../models/employee.model';
import { GeneratorService } from '../generator.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  @Input() data: Employee[] = [];
  @Input() department: string;

  @Output() remove = new EventEmitter<Employee>();
  @Output() add = new EventEmitter<string>();

  input: FormControl = new FormControl('');

  constructor(private generator: GeneratorService) {
  }

  ngOnInit() {
  }

  addEmployee(event: Event) {
    debugger;
    event.preventDefault();

    this.data.unshift({
      name: this.input.value, 
      rate: this.generator.generateNumber([20, 50])
    });

    //this.add.emit(this.input.value);
    this.input.setValue('');
  }

  calculate(num: number) {
    console.log('calculate', this.department);
    if (num > 0 && num <= 33) {
      return 'low';
    } else if (num > 33 && num <= 66) {
      return 'medium';
    } else if (num > 66) {
      return 'hight';
    }
  }

}
