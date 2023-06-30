import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Demandechequier } from '../demandechequier.model';
@Component({
  selector: 'app-demandechequier',
  templateUrl: './demandechequier.component.html',
  styleUrls: ['./demandechequier.component.css']
})
export class DemandechequierComponent implements OnInit {


  @HostBinding('class') clases = 'row';
  demandechequiers: any =[];
  demandechéquierr: Demandechequier = {
    id_dch:0,
    id_compte:0,
    	nbCheque:0,
    nb_chequier:0,
   etat:'',

      };
      constructor(
        private router: Router,
        private AdminService: AdminService,
        private activatedRoute: ActivatedRoute
      ) { }
       
   ngOnInit() {
     this.getdemandechequier();
     const params = this.activatedRoute.snapshot.params;
    if (params['id_dch']) {
      this.AdminService.getuneDemandechequier(params['id_dch'])
        .subscribe(
          res => {
            this.demandechéquierr = res;
            console.log(this.demandechéquierr);
           
          },
          err => console.log(err)
        )
    }
   }
   getdemandechequier(){
     this.AdminService.getdemandechequier().subscribe(
       res => {
         this.demandechequiers= res;
       },
 
       err => console.error(err)
     );
   }
   // fonction pour supprimer une demande de chéquier
  deletedemandechequier(id:number) {
    if (window.confirm('Are you sure you want to delete '  + ' '  + ' ?')) {
      this.AdminService.deletedemandechéquier(id).subscribe(
        res => {
       console.log(res);
     this.reloadCurrentRoute()
        },
        
        err => console.log(err)
      );;
    }

  }

 accepterdemandechequier(demande :Demandechequier,id :number) {


  this.AdminService.accepterDemandechequier(demande,id)
  .subscribe(
    
    res => {
      console.log(res);
      this.reloadCurrentRoute() ;
    },
    err => console.log(err)
    
 );

  } 
  refuserdemandechequier(demande :Demandechequier,id :number) {


    this.AdminService.refuserDemandechequier(demande,id)
    .subscribe(
      
      res => {
        console.log(res);
        console.log("hhh");

        this.reloadCurrentRoute() ;
      },
      err => console.log(err)
      
   );
  
    } 





    reloadCurrentRoute() {
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {replaceUrl: true}).then(() => {
        this.router.navigate([currentUrl]);
      });
    }
    
}