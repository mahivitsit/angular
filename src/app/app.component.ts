import { Component } from '@angular/core';
import { Form,FormGroup,FormControl,Validators } from '@angular/forms';
import { MyDataService } from './my-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private newService : MyDataService){}
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
  };
  onSubmit = function(data)
  {
    console.log(data);
  };
  form;
  vform;
  httpdata;
  ngOnInit(){
  this.form  = new FormGroup({
      decimal : new FormControl(""),
      binary : new FormControl(""),
      octal : new FormControl(""),
      hexa : new FormControl("")
    });
    this.vform = new FormGroup({
      uname : new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      fname : new FormControl("",this.textValidator)
    });
    //console.log(this.newService.success());
    //console.log(this.newService.obj);
    this.newService.fetchData();
    this.newService.fetchJson();
  };
  textValidator(control)
  {
    if(control.value.length < 3)
    {
      return {"lastname" : true};
    }
  }
  d=0;
  b=0;
  o=0;
  h=0;
  decimalChanged = function(oldValue,newValue)
  {
    this.d = this.d+1;
    if(this.d==1)
    {
      if(newValue!="")
      {
        this.form.patchValue({binary:parseInt(newValue,10).toString(2)});
        this.form.patchValue({octal:parseInt(newValue,10).toString(8)});
        this.form.patchValue({hexa:parseInt(newValue,10).toString(16).toUpperCase()});
      }
      else
      {
        this.form.patchValue({binary:""});
        this.form.patchValue({octal:""});
        this.form.patchValue({hexa:""});
      }
      this.d=0;
    }

  };
  binaryChanged = function(oldValue,newValue)
  {
    this.b= this.b+1;
    if(this.b==1)
    {
      if(newValue!="")
      {
        this.form.patchValue({decimal:parseInt(newValue,2).toString(10)});
      }
      else
      {
        this.form.patchValue({decimal:""});
      }
      this.b=0;
    }
  };
  octalChanged = function(oldValue,newValue)
  {
    this.o=this.o+1;
    if(this.o==1)
    {
      if(newValue!="")
      {
        this.form.patchValue({decimal:parseInt(newValue,8).toString(10)});
      }
      else
      {
        this.form.patchValue({decimal:""});
      }
      this.o=0;
    }
  };
  hexaChanged = function(oldValue,newValue)
  {
    this.h= this.h+1;
    if(this.h==1)
    { 
      if(newValue!="")
      {
        this.form.patchValue({decimal:parseInt(newValue,16).toString(10)});
      }
      else
      {
        this.form.patchValue({decimal:""});
      }
      this.h=0;
    }
  };
}
