export class AppareilService {
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
      switchOfAll () {
        for(let appareil of this.appareils){
            appareil.status  = 'éteint'
        }
      }
}

