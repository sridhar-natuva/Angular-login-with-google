import { Component, OnInit } from '@angular/core';
import { GoogleAPIService } from '../../services/gcp-test.service';
import { MatTableDataSource } from '@angular/material';
import { element } from 'protractor';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data = [];
  dataArray = [];
  ELEMENT_DATA = [];
  dataSource;
  displayedColumns: string[] = ['age', 'name', 'location', 'options'];

  constructor(private goolgeAPIService: GoogleAPIService) {
    var data;
    this.goolgeAPIService.readUser().subscribe(res => {
      data = res;

      data.forEach(element => {

        this.ELEMENT_DATA.push(element.doc);


        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      });
      for (let i = 0; i <= this.ELEMENT_DATA.length; i++) {
        this.ELEMENT_DATA[i].id = data[i].docID;
      }
    });
  }

  ngOnInit() {
    console.log(this.ELEMENT_DATA);
  }

  deleteRowData(row_obj) {
    console.log(row_obj)
    let payload = {
      user: {
        docID: row_obj.id
      }
    }
    console.log("payload for delete", payload);
    this.goolgeAPIService.deleteUser(payload).subscribe(res => console.log(res))
  }



  updateRowData(row) {
    let payload = {
      user: {
        docID: row.id,
        doc: row
      }
    };
    delete payload.user.doc.id;
    //console.log(payload);
    this.goolgeAPIService.updateUser(payload).subscribe(res => console.log(res))
  }

}
