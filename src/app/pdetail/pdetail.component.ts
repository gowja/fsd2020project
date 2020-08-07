import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { pdetailmodel } from './pdetail.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdetail',
  templateUrl: './pdetail.component.html',
  styleUrls: ['./pdetail.component.css']
})
export class PdetailComponent implements OnInit {
  pdetail : pdetailmodel[];

  constructor(private service:StudentService,private router:Router) { }

  ngOnInit(): void {
    this.service.getPdetails().subscribe((data)=>{
      this.pdetail=JSON.parse(JSON.stringify(data))
    })
  }

  editp(){
    this.router.navigate(['/editp']);
  }

  deletep(id){
    this.service.deletepdetail(id);
    this.router.navigate(['/pdetail']);
  }

}
