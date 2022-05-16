import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Compte} from "../models/compte";
import {CompteService} from "../services/compte.service";

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  constructor(private compteService: CompteService) { }
  public comptes: Compte[] = [];

  ngOnInit(): void {
    this.getComptes();

  }

  private getComptes() {
    this.compteService.getAll().subscribe(comptes => {
      this.comptes = comptes._embedded.comptes;
    });
  }
}
