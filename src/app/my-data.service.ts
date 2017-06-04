import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataService {

  constructor(private http:Http) { }

  jsonplaceholder = "https://jsonplaceholder.typicode.com/posts/1";
  fetchData()
  {
    return this.http.get(this.jsonplaceholder).subscribe(
        (data) => console.log(data)
    )
  }
  fetchJson()
  {
    return this.http.get(this.jsonplaceholder).map(
        (response) => response.json()
    ).subscribe(
      (data) => console.log(data)
    )
  }
  obj = {name:"Mahendar",username:"mahivitsit"};

  success(){
    return this.obj.username;
  }
}
