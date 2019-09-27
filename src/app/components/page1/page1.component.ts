import { Component, OnInit } from '@angular/core';
import { GcpTestService } from '../../services/gcp-test.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor( private _messageService: GcpTestService) { }

  ngOnInit() {

  }

  public message : any;

  getMessage(){
    this._messageService.getResponse().subscribe(res=>{
     this.message = res;
    })
  }

}
