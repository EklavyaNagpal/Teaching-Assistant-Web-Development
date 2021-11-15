import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  is1=false;
  is2=false;
  is3=false;
  is4=false;
  is5=false;
  is6=false;
  is7=false;
  is11():any{
    // console.log("sass")

    this.is1=!this.is1;
  this.is2=false;
  this.is3=false;
  this.is4=false;
  this.is5=false;
  this.is6=false;
  this.is7=false;
  }
  is12():any{
    this.is2=!this.is2;
  this.is1=false;
  this.is3=false;
  this.is4=false;
  this.is5=false;
  this.is6=false;
  this.is7=false;
  }
  is13():any{
    this.is3=!this.is3;
  this.is2=false;
  this.is1=false;
  this.is4=false;
  this.is5=false;
  this.is6=false;
  this.is7=false;
  }
  is14():any{
    this.is4=!this.is4;
  this.is2=false;
  this.is3=false;
  this.is1=false;
  this.is5=false;
  this.is6=false;
  this.is7=false;
  }
  is15():any{
    this.is5=!this.is5;
  this.is2=false;
  this.is3=false;
  this.is4=false;
  this.is1=false;
  this.is6=false;
  this.is7=false;
  }
  is16():any{
    this.is6=!this.is6;
  this.is2=false;
  this.is3=false;
  this.is4=false;
  this.is5=false;
  this.is1=false;
  this.is7=false;
  }
  is17():any{
    this.is7=!this.is7;
  this.is2=false;
  this.is3=false;
  this.is4=false;
  this.is5=false;
  this.is6=false;
  this.is1=false;
  }
  goHome()
  {
    this.router.navigate(['./xyz']);
    
  
  }
  
}
