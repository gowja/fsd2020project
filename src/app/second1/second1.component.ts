import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second1',
  templateUrl: './second1.component.html',
  styleUrls: ['./second1.component.css']
})
export class Second1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  submitted(){
    alert('success');
    this.router.navigate(['/mdetail']);
  }

}
