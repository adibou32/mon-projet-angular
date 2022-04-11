import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponentComponent } from './mon-premier-component/mon-premier-component.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService} from './services/appareil.services';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponentComponent,
    AppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
