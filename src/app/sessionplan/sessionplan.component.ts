import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbService } from '../../db.service'

@Component({
  selector: 'app-sessionplan',
  templateUrl: './sessionplan.component.html',
  styleUrls: ['./sessionplan.component.css']
})

export class SessionplanComponent implements OnInit {
  is5 = false
  SP: Object = { SP_id: "NULL", SP_Sequence: "NULL", SP_Duration: "NULL",RB_id: "NULL" };
  SP_update: Object = { SP_id: "NULL", SP_Sequence: "NULL", SP_Duration: "NULL",RB_id: "NULL" };

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
  ngOnInit() {
    this.dbser.getAlldata("sessionplan").subscribe((res) => {
      console.log(res)
      this.tabledata = res
    })
  }
  Insert() {
    let a = {
      SP_Duration: "11",
      RB_id: "NULL",
      OC_id: "11",
      SP_Session: "Checking11",
      SP_id: "3",
    }
    console.log(a);
    // console.log(this.SP)
    // this.http.post('http://localhost:8002/',a).subscribe((res) => {
    //   console.log(res)
    //   this.tabledata = res      });
    this.dbser.insertData("sessionplan",this.SP).subscribe((res) => {
      console.log(res)
      this.tabledata = res
    });
  }
  delete(row) {
    console.log(row.SP_id);
    //     this.http.get('http://localhost:8002/delete/'+row.SP_id).subscribe((res) => {
    //   console.log(res)
    // this.tabledata = res
    // })
    this.dbser.deleteData("sessionplan",row.SP_id).subscribe((res) => {
      console.log(res)
      this.tabledata = res
    })
  }

  edit() {
    this.is5 = true;
  }
  update() {
   // console.log("aaaaaaaaaa")
    this.is5 = false;
    //  let a={SP_Desc: "11",
    //  SP_Duration: "11",
    //  SP_Image: "NULL",
    //  SP_InsertDate: "11",
    //  SP_Name: "checking",
    //  SP_id: "3",
    //  CO_id: "11"}
     
    this.dbser.editData("sessionplan",this.SP_update).subscribe((res) => {
      console.log(res)
      this.tabledata = res
    });
  }
}

