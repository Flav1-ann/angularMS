import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string = "";
  @Input() appareiStatus: string = "";
  @Input() indexOfAppareil: number  = -1;
  @Input() id: number = -1;

  constructor() {
  }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareiStatus;
  }

  getColor() {
    if (this.appareiStatus === "allumé")
      return "green";
    else
      return "red";

  }
}
