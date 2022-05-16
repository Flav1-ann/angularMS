export class AppareilService{
  appareils= [
    {
      id: 1,
      name:"Machien à laver",
      status:"éteint"
    },{
      id: 2,
      name:"Télé",
      status:"allumé"
    },{
      id: 3 ,
      name:"Ordinateur",
      status:"éteint"
    }
  ];

  switchOnAll(){
    for (let appareil of this.appareils)
      appareil.status = 'allumé';
  }

  switchOffAll(){
    for (let appareil of this.appareils)
      appareil.status = 'éteint';
  }
  getAppareilById(id:number){
    return this.appareils.find((appareilObject) => { return appareilObject.id === id});
  }
}
