import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import{User} from "../user";
@Injectable()
export class RemotecallService {

  constructor(private remoteHttp:HttpClient) { }
callRemote()//can use =fn()
{
console.log("I am in Service")
}
/*callRestData():Observable<User>
{
return this.remoteHttp.get("https://jsonplaceholder.typicode.com/users").subscribe
}*/
}
