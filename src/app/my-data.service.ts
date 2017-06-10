import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataService {

  constructor(private http:Http) { }
  myServiceData : Array<any>;

  jsonplaceholder = "https://jsonplaceholder.typicode.com/posts/1";
  jsonplaceholder_photos = "https://jsonplaceholder.typicode.com/photos";
  fetchData()
  {
    return this.http.get(this.jsonplaceholder).subscribe(
        (data) => console.log(data)
    )
  }
  fetchJson()
  {
    return this.http.get(this.jsonplaceholder)
        .map((response) => response.json())
        .subscribe((data) => console.log(data))
  }
  fetchPhotos()
  {
    return this.http.get(this.jsonplaceholder_photos)
        .map((response) => response.json())
        .subscribe((res) => this.myServiceData = res)
  }
  obj = {name:"Mahendar",username:"mahivitsit"};

  success(){
    return this.obj.username;
  }
}
