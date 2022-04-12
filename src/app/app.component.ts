import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isAuth = false;

  lastUpdate = new Date()

  

  appareils: any[] | undefined;
  
  constructor (private appareilServices: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareils = this.appareilServices.appareils;
  }

  onAllumer(){
    console.log('on allume tout ! ');
  }
}
