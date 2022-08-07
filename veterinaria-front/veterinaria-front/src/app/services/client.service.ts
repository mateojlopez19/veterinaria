import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  listClients(){
    return this.http.get<any>(this.url + `/api/clients`);
  }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  addClient(client:any): Observable<any>{
    return this.http.post<any>(this.url + `/api/clients`, client, this.httpOptions)
  }

  find(id:number): Observable<any>{
    return this.http.get(this.url + `/api/clients/` + id)
  }

  update(id:number, client:any): Observable<any>{
    return this.http.put(this.url + `/api/clients/` + id, client, this.httpOptions)
  }

  deleteClient(id:any): Observable<any>{
    return this.http.delete<any>(this.url + `/api/clients/` + id, this.httpOptions)
  }
}
