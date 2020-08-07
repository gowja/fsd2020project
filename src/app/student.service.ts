import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getPdetails(){
    return this.http.get('http://localhost:7777/get');
  }

  getmdetails(){
    return this.http.get('http://localhost:7777/mark');
  }

  addpdetails(pdetail){
    console.log("httproting"+pdetail);
    return this.http.post('http://localhost:7777/add',{'pdetail':pdetail})
    .subscribe((pdetail)=>{console.log(pdetail)})
  }

  deletepdetail(id){
      console.log("delete p");
      return this.http.post('http://localhost:7777/deletep',{'id':id})
      .subscribe((id)=>{console.log(id)})
  }

}
