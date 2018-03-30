import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
taskList=["go on a trip to Kodaikanal","go fishing"];
someTask="click to add";
addTask=function(){
  console.log("Adding task "+this.someTask)
  this.taskList.push(this.someTask)
  console.log(this.taskList)
  this.someTask="";
}
deleteTask=function(ct){
this.taskList.splice(ct,1)
}
  constructor() { }

  ngOnInit() {
  }

}
