import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  clientId: any;
  client: any;
  constructor(private route: ActivatedRoute, private router: Router, private clientService: ClientService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.clientId = Number(routeParams.get('clientId'));
    this.clientService.find(this.clientId).subscribe((data:any) => {
      this.client = data;
    })
  }

  update(name:string, lastName:string, identification:string, email:string,  address:string, password:string){
    this.clientService.update(this.clientId, this.client).subscribe((res) => {
      this.router.navigateByUrl('/list');
    })
  }

}
