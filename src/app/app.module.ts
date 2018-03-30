import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import{User} from "./user";
import { AppComponent } from './app.component';
import { FamilyComponent } from './family/family.component';
import { ProductsComponent } from './shop/products/products.component';
import { CatalogComponent } from './shop/catalog/catalog.component';
import { TodoComponent } from './task/todo/todo.component';
import { ApiComponent } from './http/api/api.component';
import { RemotecallService } from './remotecall.service';


@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    ProductsComponent,
    CatalogComponent,
    TodoComponent,
    ApiComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:"catalog",
        component:CatalogComponent
      },
      {
        path:"products",
        component:ProductsComponent
      },
      {
        path:"todo",
        component:TodoComponent
      },
      {
        path:"remote",
        component:ApiComponent
      }
    ])
  ],
  providers: [RemotecallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
