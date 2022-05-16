import { Component, OnInit } from '@angular/core';
import {AppareilService} from "../services/appareil-service";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
  isAuth:boolean = false;
  // lastUpdate:Date = new Date();
  lastUpdate:Promise<Date> = new Promise(
    (resolve, reject) =>{
      const date = new Date();
      setTimeout(() =>{
        resolve(date);
      },2000)
    }
  )
  appareils:any;

  constructor(private appreilService:AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);

  }
  ngOnInit() {
    this.appareils = this.appreilService.appareils;
    console.log(this.appareils);
  }

  onAllumer() {
    this.appreilService.switchOnAll()
  }

  onEteindre() {
    this.appreilService.switchOffAll()
  }

}
