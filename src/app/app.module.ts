import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientComponent } from './components/clients/client.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectiveComponent,
    ClientsComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
