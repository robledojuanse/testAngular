import { Component, OnInit } from '@angular/core';

import { Employee } from './models/employee.model';
import { GeneratorService } from './generator.service';
import { MyserviceService } from './myservice.service'
import {Datag} from './datag'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  salesList: Employee[] = [];
  rndList: Employee[] = [];
  label: string;
  dataAsync: Datag[] = [];

  constructor(
    private generator: GeneratorService,
    private service: MyserviceService
  ) {}

  ngOnInit() {
    this.salesList = this.generator.generateList();
    this.dataAsync = [];
    this.rndList = this.generator.generateList();
  }

  add(list: Employee[], name: string) {
    debugger;
    list.unshift({
      name,
      rate: this.generator.generateNumber([20, 50])
    });
  }

  remove(list: Employee[], node: Employee) {
    debugger;
    list.splice(list.indexOf(node), 1);
  }



  funcionasyncrona(param){

    this.dataAsync = param;

  }

  async callalldata(){



   debugger;
    const datados = await this.service.getalldataAPI().subscribe(

      next => {
        
       this.dataAsync =  next
       const res =  this.dataAsync;
       this.funcionasyncrona( this.dataAsync);


      },
      error => {console.error(error)},  
   

    );

    const constdos = datados;

  
    
  }
}
