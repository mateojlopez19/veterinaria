import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  email ?: string;
  password ?: string;

  constructor(public clientService: ClientService) { }

  login(){
    const client = {email: this.email, password: this.password};
    this.clientService.addClient(client).subscribe(data=>{
      console.log(data);
    })
  }

}
