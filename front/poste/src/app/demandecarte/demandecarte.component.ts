import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-demandecarte',
  templateUrl: './demandecarte.component.html',
  styleUrls: ['./demandecarte.component.css']
})
export class DemandecarteComponent implements OnInit {

  @HostBinding('class') clases = 'row';
  demandecarte: any = {
   id_dec:0,
   id_compte:0,
   type	:'',
   etat:''
 
   };
  constructor(private service:AdminService ,private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id_dec']) {
      this.service.getuneDemandechequier(params['id_dec'])
        .subscribe(
          res => {
            console.log(this.demandecarte);
            console.log("hello");
          },
          err => console.log(err)
        )
    }
  }
  ajoutdemandecarte() {

    this.service.createDemandeCarte(this.demandecarte)
    
    .subscribe(
     res => {
       console.log(res);
            },
     err =>
     
       console.log(err)
   )
  
}

}
