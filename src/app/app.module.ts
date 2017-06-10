import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MyDataService } from './my-data.service';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdButtonModule,MdMenuModule,MdCardModule,MdToolbarModule,MdIconModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ProductComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    RouterModule.forRoot([
      {
        path : 'members',
        component : MembersComponent
      },
      {
        path : 'product',
        component : ProductComponent
      }
    ])
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
