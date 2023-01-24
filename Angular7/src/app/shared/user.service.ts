import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from "./user.model";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData : User;
  readonly rootURL ="https://localhost:44367/api"

  constructor(private http : HttpClient) { }
  postUser(formData : User){
    return this.http.post(this.rootURL+'/User',formData);
  }
  getUser(username: string,password: string){
    return this.http.get(this.rootURL+'/User?username='+ username +'&password='+password);
  }
  putUser(formData : User){
    return this.http.put(this.rootURL+'/User/'+formData.Id,formData);
}
  
deleteUser(id : number){
  return this.http.delete(this.rootURL+'/User/'+ id);
}
}

