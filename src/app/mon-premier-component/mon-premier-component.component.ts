import { Component, Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-premier-component',
  templateUrl: './mon-premier-component.component.html',
  styleUrls: ['./mon-premier-component.component.scss']
})
export class MonPremierComponentComponent implements OnInit {
  @Input() appareilName: string | undefined;
  @ Input() appareilFunction: string | undefined;
  @ Input() appareilStatus = 'allumé';
  @ Input() appareilOn = 'éteint';
  // appareil = 'éteint';
  constructor() { }

  ngOnInit(): void {
  }
  getStatus(){
    return this.appareilStatus;
  }
  getStatus2(){
    return this.appareilOn;
  }
}
