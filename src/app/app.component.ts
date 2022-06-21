import { Component } from '@angular/core';

import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="tdforms";
  loans = ['Home Loan','Personal Loan','Business Loan','Student Loan'];

  userModel = new User('','akshit@gmail.com',8988330175,'','abc','zxy','jkl',true);
}
