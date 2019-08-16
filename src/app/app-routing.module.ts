import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './components/directive/directive.component';
import { ClientsComponent } from './components/clients/clients.component';

const ROUTES: Routes = [
  {path: '', redirectTo: 'clients', pathMatch: 'full'},
  {path: 'directives', component: DirectiveComponent},
  {path: 'clients', component: ClientsComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'clients' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
