import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricoPageComponent } from './historico-page/historico-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NovaTarefaPageComponent } from './nova-tarefa-page/nova-tarefa-page.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';

const routes: Routes = [
  { path: '', component: PrincipalPageComponent, children: [
    { path: 'criar-tarefa', component: NovaTarefaPageComponent },
    { path: 'historico-tarefa', component: HistoricoPageComponent },
    { path: 'login', component: LoginPageComponent }   
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
