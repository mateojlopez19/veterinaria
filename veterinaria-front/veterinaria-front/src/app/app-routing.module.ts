import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewClientComponent } from './components/new-client/new-client.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',   redirectTo: '/client/list', pathMatch: 'full'
    /* path: 'add', component: LoginComponent */
  },
  {
    path: 'client/add', component: NewClientComponent
  },
  {
    path: 'client/list', component: ClientsComponent
  },
  {
    path: 'client/edit/:clientId', component: EditClientComponent
  },
  {
    path: 'client/navbar', component: NavbarComponent
  },

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
