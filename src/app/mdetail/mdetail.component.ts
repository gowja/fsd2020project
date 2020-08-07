import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { markmodel } from './mark.model';

@Component({
  selector: 'app-mdetail',
  templateUrl: './mdetail.component.html',
  styleUrls: ['./mdetail.component.css']
})
export class MdetailComponent implements OnInit {
  mark : markmodel[];

  constructor(private service:StudentService) { }

  ngOnInit(): void {
    this.service.getmdetails().subscribe((data)=>{
      this.mark=JSON.parse(JSON.stringify(data))
      console.log("success mark"+this.mark)
    })
    
  }

}
