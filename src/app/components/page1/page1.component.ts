import { Component, OnInit } from '@angular/core';
import { GoogleAPIService } from '../../services/gcp-test.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  items = [];
  constructor( private _messageService: GoogleAPIService, private _db: AngularFirestore) {



  }

  ngOnInit() {
    this._db.collection(`items`).snapshotChanges().subscribe(serverItems =>{
      serverItems.forEach(a=>{
        let item:any = a.payload.doc.data();
        item.id = a.payload.doc.id;
        console.log(item);
        this.items.push(item);
      })
    });
  }

  add(){
   this._db.collection(`items`).add({
      title : "title 75"
    })
  }

  update(item){
    this._db.doc(`items/${item.id}`).update({
      title :"updated title"
    })
  }

  delete(item){
    this._db.doc(`items/${item.id}`).delete();
  }

  public message : any;

  // getMessage(){
  //   this._messageService.getResponse().subscribe(res=>{
  //    this.message = res;
  //   })
  // }

}
