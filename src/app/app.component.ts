import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  myobj = {id:1,name:"Mahendar"};
  books = ["Head First Java", "CPDS", "Angular 4"];
  isTrue = true;
  newItem = "";
  pushItem = function()
  {
    if(this.newItem != "")
    {
      this.books.push(this.newItem);
      this.newItem = "";
    }
  };
  removeItem = function(index)
  {
    this.books.splice(index,1);
  }

}
