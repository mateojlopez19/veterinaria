import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewClientComponent } from './components/new-client/new-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* import { NavbarComponent } from './components/navbar.component'; */
//
@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    NewClientComponent,
    EditClientComponent,
    /* NavbarComponent, */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
