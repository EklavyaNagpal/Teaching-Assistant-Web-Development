import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbService } from '../../db.service'
@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.css']
})

export class ConceptComponent implements OnInit {
  is1 = false
  CN: Object = { CN_id: "NULL", CN_Name: "NULL", CN_Desc: "NULL", CN_Duration: "NULL", CN_Image: "NULL" };
  CN_update: Object = { CN_id: "NULL", CN_Name: "NULL", CN_Desc: "NULL", CN_Duration: "NULL", CN_Image: "NULL" };

  tabledata = {}
  prod={}
  constructor(public dbser: DbService) {
  }
  // sleep(milliseconds) {
  //   var start = new Date().getTime();
  //   for (var i = 0; i < 1e7; i++) {
  //     if ((new Date().getTime() - start) > milliseconds) {
  //       break;
  //     }
  //   }
  // }

  // abb(){this.http.get('http://localhost:8002/').subscribe((res) => {
  //   console.log(res)
  // this.tabledata = res
  // })}
  ngOnInit() {
    // this.dbser.getAlldata("concept").subscribe((res) => {
    //   console.log(res)
    //   this.tabledata = res
    // })
    this.dbser.getAlldata("curriculum").subscribe((res) => {
      
      console.log(res)
      this.prod = res
      this.tabledata=res
    })
    
  }
  aloo(id){
    this.dbser.getiddata(id).subscribe((res) => {
        
      console.log(res)
      this.tabledata = res;})
  }
  is123(id){this.CN["CO_id"]=id}
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
    this.dbser.insertData("concept",this.CN).subscribe((res) => {
      console.log(res)
      this.tabledata = res
    });
  }
  delete(row) {
    console.log(row.CN_id);
    //     this.http.get('http://localhost:8002/delete/'+row.CN_id).subscribe((res) => {
    //   console.log(res)
    // this.tabledata = res
    // })
    this.dbser.deleteData("concept",row.CN_id).subscribe((res) => {
      console.log(res)
      this.tabledata = res
    })
  }

  edit() {
    this.is1 = true;
  }
  update() {
   // console.log("aaaaaaaaaa")
    this.is1 = false;
    //  let a={CN_Desc: "11",
    //  CN_Duration: "11",
    //  CN_Image: "NULL",
    //  CN_InsertDate: "11",
    //  CN_Name: "checking",
    //  CN_id: "3",
    //  CO_id: "11"}
     
    this.dbser.editData("concept",this.CN_update).subscribe((res) => {
      console.log(res)
      this.tabledata = res
    });
  }
}
