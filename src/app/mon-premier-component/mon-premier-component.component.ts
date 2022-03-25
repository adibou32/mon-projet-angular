import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-premier-component',
  templateUrl: './mon-premier-component.component.html',
  styleUrls: ['./mon-premier-component.component.scss']
})
export class MonPremierComponentComponent implements OnInit {
  appareilName = 'machine à laver';
  appareilStatus = 'éteint';
  constructor() { }

  ngOnInit(): void {
  }
  getStatus(){
    return this.appareilStatus;
  }

}
