import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
import { CurriculumComponent } from '../curriculum/curriculum.component';
import { DbService } from '../../db.service'

@Component({
  selector: 'app-course-content-dev',
  templateUrl: './course-content-dev.component.html',
  styleUrls: ['./course-content-dev.component.css']
})
export class CourseContentDevComponent implements OnInit {
prod={}
cou={}
conc={}
tabledata={}
tabledata1={}
tbdata={}
tdata={}
aa = false;
bb = false;
cc = false;
xx=false;
cou1={}
cou2={}
cou3={}
s100=false
tabledata100={}
appcon:boolean=false;
appcourse:boolean=false;
appcur:boolean=false;
appsub:boolean=false;
appses:boolean=false;
tabledata101={}
s101=false
s102=false
tabledata102={}
s103=false
tabledata103={}
tabledata104={}
tabledata105={}
s105=false
  constructor(private dbser:DbService) { }

  
  ngOnInit() {
    this.dbser.getAlldata("curriculum").subscribe((res) => {
      
      console.log(res)
      this.prod = res
      this.tabledata1=res;
    })
      this.dbser.getAlldata("course").subscribe((res) => {
        
        console.log(res)
        this.cou = res
    })
    this.dbser.getAlldata("concept").subscribe((res) => {
      console.log(res)
      this.conc = res
      this.cou1=res
       this.cou2=res
       this.cou3=res
    })
    
  }
 aloo(id){
   this.dbser.getiddata(id).subscribe((res) => {
        
    console.log(res)
    this.cou1 = res
})
 } 
 aloo1(id){
  this.dbser.getidddata(id).subscribe((res) => {
        
    console.log(res)
    this.cou2 = res
})
 }
aloo2(id){
  this.dbser.getiddddata(id).subscribe((res) => {
       
   console.log(res)
   this.cou3 = res
})
 }
is100(){
  this.s100=true
  this.s105=false
  this.s101=false
  this.s102=false
  this.s103=false
  this.aa=false;
 this.bb=false;
 this.cc=false;
 this.xx=false;
 this.appcon=false;
 this.appcourse=false;
 this.appcur=false;
 this.appsub=false;
 this.appses=false;
  this.dbser.getAlldata("curriculum").subscribe((res) => {
      
    console.log(res)
    // this.prod = res
    this.tabledata100=res;
  })
}
 is101(id){
 this.s100=false
 this.s101=true
 this.s105=false
  this.s102=false
  this.s103=false
 this.aa=false;
 this.bb=false;
 this.cc=false;
 this.xx=false;
 this.appcon=false;
 this.appcourse=false;
 this.appcur=false;
 this.appsub=false;
 this.appses=false;
  this.dbser.getiddata(id).subscribe((res) => {
        
    console.log(res)
    this.tabledata101 = res
})
}
is102(id){
  this.s100=false
 this.s101=false
 this.s102=true
  this.s105=false
  this.s103=false
 this.aa=false;
 this.bb=false;
 this.cc=false;
 this.xx=false;
 this.appcon=false;
 this.appcourse=false;
 this.appcur=false;
 this.appsub=false;
 this.appses=false;
 this.dbser.getidddata(id).subscribe((res) => {
        
  console.log(res)
  this.tabledata102 = res
  this.tabledata104=res
})
}
is103(id){
  this.s100=false
  this.s101=false
  this.s102=false
  this.s103=true
  this.s105=false
  this.aa=false;
  this.bb=false;
  this.cc=false;
  this.xx=false;
  this.appcon=false;
  this.appcourse=false;
  this.appcur=false;
  this.appsub=false;
  this.appses=false;

  this.dbser.getiddddata(id).subscribe((res) => {
         
   console.log(res)
   this.tabledata103 = res
 })
}
is106(id){
  this.s100=false
  this.s101=false
  this.s102=false
  this.s103=false
  this.aa=false;
    this.bb=false;
    this.cc=false;
    this.xx=false;
    this.appcon=false;
    this.appcourse=false;
    this.appcur=false;
    this.appsub=false;
    this.appses=false;
this.s105=true
  this.dbser.getiddddata(id).subscribe((res) => {
         
   console.log(res)
   this.tabledata105 = res
 })
}
  is11(){
    this.s100=false
  this.s101=false
  this.s102=false
  this.s103=false
  this.s105=false
    this.aa=false;
    this.bb=false;
    this.cc=false;
    this.xx=false;
    this.appcon=!this.appcon;
    this.appcourse=false;
    this.appcur=false;
    this.appsub=false;
    this.appses=false;
    // this.router.navigate(['./concept']);
    }

    is125(iddd){

      {    console.log(iddd)
        this.cc=true
        this.dbser.getiddddata(iddd).subscribe((res) => {
          console.log(res)
         // console.log("hello")
          this.tdata = res
        })
        this.s100=false
  this.s101=false
  this.s102=false
  this.s103=false
  this.s105=false
      this.aa=false;
      this.bb=false;
      this.xx=false;
      this.appcourse=false;
      this.appcon=false;
      this.appcur=false;
      this.appsub=false;
      this.appses=false;
  
      }
    }

    is126(idddd){

      {    console.log(idddd)
        this.xx=true
        this.dbser.getidddddata(idddd).subscribe((res) => {
          console.log(res)
         // console.log("hello")
          this.cou3 = res
        })
        this.s100=false
  this.s101=false
  this.s102=false
  this.s103=false
  this.s105=false
      this.aa=false;
      this.bb=false;
      this.cc=false;
      this.appcourse=false;
      this.appcon=false;
      this.appcur=false;
      this.appsub=false;
      this.appses=false;
  
      }
    }


    is122(){
      this.s100=false
  this.s101=false
  this.s102=false
  this.s103=false
  this.s105=false
    this.aa=false;
    this.bb=false;
    this.cc=false;
    this.xx=false;
    this.appcourse=!this.appcourse;
    this.appcon=false;
    this.appcur=false;
    this.appsub=false;
    this.appses=false;

    }

    is123(idd){

      {    console.log(idd)
        this.bb=true
        this.dbser.getidddata(idd).subscribe((res) => {
          console.log(res)
          this.tbdata = res
        })
        this.s100=false
  this.s101=false
  this.s102=false
  this.s103=false
  this.s105=false
      this.aa=false;
      this.cc=false;
      this.xx=false;
      this.appcourse=false;
      this.appcon=false;
      this.appcur=false;
      this.appsub=false;
      this.appses=false;
  
      }
    }
    is12(id)
  {    console.log(id)
    this.aa=true
    this.dbser.getiddata(id).subscribe((res) => {
      console.log(res)
      this.tabledata = res
    })
    this.s100=false
  this.s101=false
  this.s102=false
  this.s103=false
  this.s105=false
      this.bb=false;
      this.cc=false;
      this.xx=false;
    this.appcourse=false;
    this.appcon=false;
    this.appcur=false;
    this.appsub=false;
    this.appses=false;
    // this.router.navigate(['./courses']);  
  }
    
     is13()
   {
    this.s100=false
    this.s101=false
    this.s102=false
    this.s103=false
  this.s105=false  
     this.aa=false;
    this.bb=false;
    this.cc=false;
    this.xx=false;
    this.appcon=false;
    this.appcourse=false;
    this.appsub=false;
    this.appses=false;
    this.appcur=!this.appcur;  
     //this.router.navigate(['./curriculum']);
   }
   is14()
   {
    this.s100=false
    this.s101=false
    this.s102=false
    this.s103=false
    this.s105=false
   this.aa=false;
   this.bb=false;
  this.cc=false;
  this.xx=false;
    this.appcon=false;
    this.appcourse=false;
    this.appcur=false;
    this.appses=false;
    this.appsub=!this.appsub; 
     //this.router.navigate(['./subconcept']);
   }
  //  is99()
  //  {
  //  this.aa=false;
  //  this.bb=false;
  // this.cc=!this.appcon;
  // this.xx=false;
  //   this.appcon=false;
  //   this.appcourse=false;
  //   this.appcur=false;
  //   this.appses=false;
  //   this.appsub=false; 
  //    //this.router.navigate(['./subconcept']);
  //  }
  is16()
   {
    this.s100=false
    this.s101=false
    this.s102=false
    this.s103=false
    this.s105=false  
    this.aa=false;
    this.bb=false;
    this.cc=false;
    this.xx=false;
    this.appcon=false;
    this.appcourse=false;
    this.appcur=false;
    this.appsub=false;
    this.appses=!this.appses;
     //this.router.navigate(['./sessionplan']);
   }
  //  is15()
  //  {
  //    this.router.navigate(['./curriculum']);
  //  }
  //  is17()
  //  {
  //    this.router.navigate(['./curriculum']);
  //  }
   
}



