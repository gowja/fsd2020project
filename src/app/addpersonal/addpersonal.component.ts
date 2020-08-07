import { Component, OnInit } from '@angular/core';
import { pdetailmodel } from '../pdetail/pdetail.model';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpersonal',
  templateUrl: './addpersonal.component.html',
  styleUrls: ['./addpersonal.component.css']
})
export class AddpersonalComponent implements OnInit {

  constructor(private router:Router,private service:StudentService) { }
  newpdetail=new pdetailmodel(null,null);
  ngOnInit(): void {
  }

  addp(){
    this.service.addpdetails(this.newpdetail);
    alert("success");
    console.log('called'+this.newpdetail);
    this.router.navigate(['/pdetail']);
    this.ngOnInit();
  }

}
