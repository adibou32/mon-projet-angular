import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppareilService {
  switchOfAll() {
    throw new Error('Method not implemented.');
  }
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
      switchOnAll () {
          for(let appareil of this.appareils){
              appareil.status = 'allumé'
          }
      }
      switchOffAll () {
        for(let appareil of this.appareils){
            appareil.status  = 'éteint'
        }
      }
}

