import { Component } from '@angular/core';

@Component({
  selector: 'MyAngularApp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4';
  name='Sherry'
  num1=10
  num2=20
  displayDate=function(){
    return new Date();
  }
}
