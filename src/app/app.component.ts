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
  title = 'blog';
  myName = 'bruce'
  getName(){
    alert("button function")
  }


  

  appareils!: any[];
  appareilStatus2= 'éteint';
  ofEteindre: any;
  msg: any;
  
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
    if (this.onAllumer()){
      return this.appareilStatus2 === 'allumé';;
    } else this.appareilStatus2 === 'éteint';{
      return this.onAllumer;
    }
    // console.log('on allume tout ! ');
    
  }
  // onEteindre(){
  
  // }
}
