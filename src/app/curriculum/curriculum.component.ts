// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbService } from '../../db.service'

 @Component({
   selector: 'app-curriculum',
   templateUrl: './curriculum.component.html',
   styleUrls: ['./curriculum.component.css']
 })

export class CurriculumComponent implements OnInit {
  is3 = false
  CU: Object = { CU_id: "NULL", CU_Name: "NULL", CU_Desc: "NULL",CU_Image: "NULL" };
  CU_update: Object = { CU_id: "NULL", CU_Name: "NULL", CU_Desc: "NULL",CU_Image: "NULL" };

  tabledata = {}
  constructor(public dbser: DbService) {
  }
  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

  // abb(){this.http.get('http://localhost:8002/').subscribe((res) => {
  //   console.log(res)
  // this.tabledata = res
  // })}
 
 // public listItems: Array<string> = [];

  ngOnInit() {
    this.dbser.getAlldata("curriculum").subscribe((res) => {
      console.log(res)
      this.tabledata = res
    })
  }

  // dropdownRefesh(){
  //   this.dbser.getCirDropDownValues("curriculum",this.CU).subscribe(res=>{
  //     res.foreach(element => {
  //       this.listItems.push(element["curriculum"]);
        
  //     });
  //   })

  // }

  Insert() {
    let a = {
      CN_Desc: "1211",
      CN_Duration: "11",
      CN_Image: "NULL",
      CN_InsertDate: "11",
      CN_Name: "Checking11",
      CN_id: "3",
      CO_id: "11"
    }
    console.log(a);
    // console.log(this.CN)
    // this.http.post('http://localhost:8002/',a).subscribe((res) => {
    //   console.log(res)
    //   this.tabledata = res      });
    this.dbser.insertData("curriculum",this.CU).subscribe((res) => {
      console.log(res)
      this.tabledata = res
    });
  }
  delete(row) {
    console.log(row.CU_id);
    //     this.http.get('http://localhost:8002/delete/'+row.CN_id).subscribe((res) => {
    //   console.log(res)
    // this.tabledata = res
    // })
    this.dbser.deleteData("curriculum",row.CU_id).subscribe((res) => {
      console.log(res)
      this.tabledata = res
    })
  }

  edit() {
    this.is3 = true;
  }
  update() {
   // console.log("aaaaaaaaaa")
    this.is3 = false;
    //  let a={CN_Desc: "11",
    //  CN_Duration: "11",
    //  CN_Image: "NULL",
    //  CN_InsertDate: "11",
    //  CN_Name: "checking",
    //  CN_id: "3",
    //  CO_id: "11"}
     
    this.dbser.editData("curriculum",this.CU_update).subscribe((res) => {
      console.log(res)
      this.tabledata = res
    });
  }
}

