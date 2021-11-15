import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbService } from '../../db.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  is2 = false
  CO: Object = { CO_id: "NULL", CO_Name: "NULL", CO_Desc: "NULL", CO_Duration: "NULL", CO_Image: "NULL" ,CU_id:"NULL"};
  CO_update: Object = { CO_id: "NULL", CO_Name: "NULL", CO_Desc: "NULL", CO_Duration: "NULL", CO_Image: "NULL",CU_id:"NULL" };

  tabledata = {}
prod={}
  constructor(public dbser: DbService) {
  }

  // abb(){this.http.get('http://localhost:8002/').subscribe((res) => {
  //   console.log(res)
  // this.tabledata = res
  // })}
  ngOnInit() {
    // this.dbser.getAlldata("course").subscribe((res) => {
    //   console.log(res)
    //   this.tabledata = res
    // })
    this.dbser.getAlldata("curriculum").subscribe((res) => {
      
      console.log(res)
      this.prod = res
      
      this.tabledata=res;
    })
  
  }
  aloo(id)
  {    console.log(id)
    this.CO["CU_id"]=id
    // this.dbser.getidddata(id).subscribe((res) => {
    //   console.log(res)
    //   this.CO = res
    //   // this.CO["CU_id"]=res["CU_id"]
    // })
  }
  Insert() {
    let a = {
      CO_Desc: "1211",
      CO_Duration: "11",
      CO_Image: "NULL",
      CO_InsertDate: "11",
      CO_Name: "Checking11",
      CO_id: "3",
      CU_id: "11"
    }
    console.log(a);
    // console.log(this.CO)
    // this.http.post('http://localhost:8002/',a).subscribe((res) => {
    //   console.log(res)
    //   this.tabledata = res      });
    this.dbser.insertData("course",this.CO).subscribe((res) => {
      console.log(res)
      this.tabledata = res
    });
  }
  delete(row) {
    console.log(row.CO_id);
    //     this.http.get('http://localhost:8002/delete/'+row.CO_id).subscribe((res) => {
    //   console.log(res)
    // this.tabledata = res
    // })
    this.dbser.deleteData("course",row.CO_id).subscribe((res) => {
      console.log(res)
      this.tabledata = res
    })
  }

  edit() {
    this.is2 = true;
  }
  update() {
   // console.log("aaaaaaaaaa")
    this.is2 = false;
    //  let a={CO_Desc: "11",
    //  CO_Duration: "11",
    //  CO_Image: "NULL",
    //  CO_InsertDate: "11",
    //  CO_Name: "checking",
    //  CO_id: "3",
    //  CU_id: "11"}
     
    this.dbser.editData("course",this.CO_update).subscribe((res) => {
      console.log(res)
      this.tabledata = res
    });
  }
}
