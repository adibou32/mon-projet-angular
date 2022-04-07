import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  appareilName = 'machine à laver';
  appareilFunction = 'laver';
  // appareilStatus: string;
  appareilStatus2 = 'éteint';
  constructor() { }

  ngOnInit(): void {
  }

  getColor(){
    if (this.appareilStatus2 == 'allumé'){
 
    }
     return 'red' ;
     
         
     }
   
}


