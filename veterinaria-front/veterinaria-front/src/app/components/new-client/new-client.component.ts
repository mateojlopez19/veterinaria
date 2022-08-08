import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {

  constructor(private clientService: ClientService, private router: Router) { }

  clients:any;

  ngOnInit(): void {
  }

  add(name:string, lastName:string, identification:string, email:string,  address:string, password:string){
    this.clients = {
      'name': name,
      'lastName': lastName,
      'identification': identification,
      'email': email,
      'address': address,
      'password': password,
    };
    this.clientService.addClient(this.clients as  any).subscribe(clients => {
      this.clients = this.clients,
      this.router.navigateByUrl('/list');
    })

  }

}
