import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(private ClientService : ClientService, private router: Router ) { }

  clients: any;

  ngOnInit(): void {
    this.ShowClients()
  }

  ShowClients(){
    this.clients = this.ClientService.listClients().subscribe(client => {
      this.clients = client;
    });
  }

  deleteClient(id:any){
    this.ClientService.deleteClient(id).subscribe(
      res => {
        this.clients = this.clients.filter((a:any) => a.id == id);
        this.router.navigateByUrl('/list');
      }
    );
  }

}
