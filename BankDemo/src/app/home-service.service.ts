import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bank } from './bank';

@Injectable({
  providedIn: 'root'
})
export class HomrServiceService {

  constructor(public http:HttpClient) { }
b:Bank={

  accno:0,
  name:"",
  address:"",
  mobno:0,
  username:"",
  password:"",
  bankcode:0,
  cifno:"",
  state:"",
  country:"",
  balance:0
}
  registerdata(b:Bank){
  alert(b.username)
 return this.http.post("http://localhost:9898/savedata",b);
  }
  getdata(b:Bank){
    alert("getalldata")
    return this.http.get("http://localhost:9898/getdata");
  }
  updateinfo(b:Bank)
  {
    return this.http.put("http://localhost:9898/bank/"+b.accno,b);
  }
  deletedata(b:Bank)
  {
    alert("in service")
    return this.http.delete("http://localhost:9898/bank/"+b.accno);
  }
}
