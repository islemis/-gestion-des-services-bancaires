import { Component, HostBinding, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-chequier',
  templateUrl: './chequier.component.html',
  styleUrls: ['./chequier.component.css']
})
export class ChequierComponent implements OnInit {

  @HostBinding('class') clases = 'row';
  demandechequier: any = {
   id_dch:0,
   id_compte:0,
   nbCheque	:0,
   nb_chequier:0,
   etat:''

   };
  constructor(private service:AdminService ,private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id_dch']) {
      this.service.getuneDemandechequier(params['id_dch'])
        .subscribe(
          res => {
            console.log(this.demandechequier);
            console.log("hello");
          },
          err => console.log(err)
        )
    }
  }
  ajoutdemandechequier() {

    this.service.createDemandechequier(this.demandechequier)
    
    .subscribe(
     res => {
       console.log(res);
            },
     err =>
     
       console.log(err)
   )
  
}
  

}
