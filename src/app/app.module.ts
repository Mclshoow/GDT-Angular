import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoricoPageComponent } from './historico-page/historico-page.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NovaTarefaPageComponent } from './nova-tarefa-page/nova-tarefa-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoricoPageComponent,
    PrincipalPageComponent,
    LoginPageComponent,
    NovaTarefaPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
