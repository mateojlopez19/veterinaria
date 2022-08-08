import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name ?: string;
  lastName ?: string;
  email ?: string;
  password ?: string;

  constructor() { }

  register(){
    console.log(this.name);
    console.log(this.lastName);
    console.log(this.email);
    console.log(this.password);
  }

}
