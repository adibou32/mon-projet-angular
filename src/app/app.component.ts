import { Component } from '@angular/core';
import { AppareilService } from './services/appareil.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  lastUpdate = new Date()

  appareils = [
    {
      name: 'Machine à laver',
      status: 'allumé'
    },
    {
      name: 'Télévision',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'allumé'
    },
  ];

  appareilOne = 'machine à laver';
  appareilTwo = 'Télévision';
  appareilThree = 'ordinateur';
  constructor (private appareilServices: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer(){
    console.log('on allume tout ! ');
  }
}
