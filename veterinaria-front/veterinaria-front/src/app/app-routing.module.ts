import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NewClientComponent } from './components/new-client/new-client.component';

const routes: Routes = [
  {
    path: 'add', component: NewClientComponent
  },
  {
    path: 'edit/:clientId', component: EditClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
