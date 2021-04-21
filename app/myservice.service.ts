import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Datag} from './datag'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }

  url: string = "https://jsonplaceholder.typicode.com/todos";


  getalldataAPI(): Observable<Datag[]>  { 
    debugger;
    return this.http.get<Datag[]>(this.url);
    
  }

}
