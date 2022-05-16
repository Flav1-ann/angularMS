import {Component,EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CompteService} from "../../services/compte.service";
import {Compte} from "../../models/compte";

@Component({
  selector: 'app-create-compt',
  templateUrl: './create-compt.component.html',
  styleUrls: ['./create-compt.component.css']
})
export class CreateComptComponent implements OnInit {

  @Output() updateLatestCompte: EventEmitter<any> = new EventEmitter<any>();


  alertSucess: boolean = false;
  alertEchec: boolean = false;
  EchecCause: String | undefined = "";

  compteForm = this.fb.group({
    solde: ['',[Validators.required,Validators.pattern("^[0-9]*$")]],
    type: ['',Validators.required]
  },{updateOn : "change"});
  /**code:number;
   solde: number;
   dateCreation: Date;
   type: string;*/

  constructor(private fb:FormBuilder, private compteService : CompteService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.compteForm.valid){
      let compte: Compte = {
        code: undefined,
        solde: this.compteForm.value.solde,
        dateCreation: new Date(),
        type: this.compteForm.value.type,
      };
      this.compteService.create(compte).subscribe({
        next: (value) => {
          this.updateLatestCompte.emit() ;
          if(!this.alertEchec)
          {
            this.alertSucess = true;
          }else{
            this.alertEchec = false;
          }

        },
        error : (error) => {
          //console.log(error);
          this.alertEchec = true;
          this.EchecCause = error;
        }
      });
      console.log(this.alertEchec)


    } else {
      console.log("Erreur, formulaire incomplet ou invalide");
    }

  }

}
