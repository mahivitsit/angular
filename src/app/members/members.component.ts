import { Component, OnInit } from '@angular/core';
import {MyDataService} from "../my-data.service";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private newService : MyDataService) { }

  ngOnInit() {
    console.log(this.newService.obj.name);
    this.newService.obj.name = "Baahubali";
  }

}
