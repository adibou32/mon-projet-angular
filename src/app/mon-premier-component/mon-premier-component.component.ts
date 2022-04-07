import { Component, Input ,OnInit, } from '@angular/core';

@Component({
  selector: 'app-mon-premier-component',
  templateUrl: './mon-premier-component.component.html',
  styleUrls: ['./mon-premier-component.component.scss']
})
export class MonPremierComponentComponent implements OnInit {
  @Input() appareilName: string | undefined;
  @ Input() appareilFunction: string | undefined;
  @ Input() appareilStatus = 'éteint';
  // appareil = 'éteint';
  @ Input() appareilStatus2 = 'allumé';
  @ Input() appareilOn = '&&&';
  @ Input() colorRed = '&&&';
  // @ Input() colorGreen = 'Green';
  

  appareil = 'éteint';
  constructor() { }

  ngOnInit(): void {
  }
  getStatus(){
    return this.appareilStatus2;
  }

  getStatus2(){
    return this.appareilOn;
    
  }

  // getStatus3(){
    
  // }
  
  getColor(){
   if (this.appareilStatus2 === 'allumé'){
    return 'green'
   } else if(this.appareilStatus2 === 'éteint') {
     return 'red'
   }
    return 'blue';
    // {
    //   return 'red';
    // }
        
    }
    
  // getColor2(){
  //   if (this.appareilStatus2 === 'éteint'){

  //   }
  //   return this.colorRed;
  // }
  
}