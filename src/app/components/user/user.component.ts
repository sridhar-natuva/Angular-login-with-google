import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { NgForm } from '@angular/forms';
import { GoogleAPIService } from '../../services/gcp-test.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service : UserService, private goolgeAPIService : GoogleAPIService , private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData ={
      id : null,
      name : '',
      age : 1,
      location: ''

    }
  }

  onSubmit(form :NgForm){
    let data = form.value;
    console.log(data);
    this.goolgeAPIService.createUser(data).subscribe(res=>{
      console.log(res);
    });
    this.resetForm(form);
    // this._snackBar.openFromComponent(PizzaPartyComponent, {
    //   duration: 5 * 1000,
    // });
  }

}

// @Component({
//   selector: 'snack-bar-component-example-snack',
//   templateUrl: 'snackbar.html',
//   styles: [`
//     .example-pizza-party {
//       color: hotpink;
//     }
//   `],
// })
// export class PizzaPartyComponent {}
