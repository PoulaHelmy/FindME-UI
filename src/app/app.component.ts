import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {FirebaseService} from '@@core/services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-notes';
  constructor(private toastr: ToastrService,private fire:FirebaseService) {
    this.fire.createUser(1,{name:'Pouls',email:'pola@gmail.com'}).then((res) => {
      console.log(res);
    });

  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
