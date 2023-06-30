import { Component, HostBinding, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { Demandecarte } from '../demandecarte.model';
@Component({
  selector: 'app-lesdemandesc',
  templateUrl: './lesdemandesc.component.html',
  styleUrls: ['./lesdemandesc.component.css']
})
export class LesdemandescComponent implements OnInit {

demandeCarte:any=
{
id_dc:0,
etat:'',
id_compte:0,
type:''
}
  @HostBinding('class') classes ='row';
 demandecarte: any =[];
  constructor(private router: Router,private AdminService :AdminService, private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getdemandecarte();
  }
  accepterdemandecarte(demande : Demandecarte , id:number) {

    this.AdminService.accepterDemandecarte(demande,id)
      .subscribe(
        
        res => {
          console.log(res)
          this.reloadCurrentRoute()

        },
        err => console.log(err)
     )
  }
  refuserdemandecarte(demande : Demandecarte , id:number) {

    this.AdminService.refuserDemandecarte(demande,id)
      .subscribe(
        res => {
          console.log(res);
        this.refresh() ;       },
        err => console.log(err)
     )
  }
  getdemandecarte(){
    this.AdminService.getdemandecarte().subscribe(
      res => {
        this.demandecarte= res;
      },

      err => console.error(err)
    );
  }
  deletedemandecarte(id:number) {
    if (window.confirm('Are you sure you want to delete '  + ' '  + ' ?')) {
      this.AdminService.deletedemandecarte(id).subscribe(
        res => {
       console.log(res);
     this.reloadCurrentRoute()
        },
        
        err => console.error(err)
      );;
    }

  }
  refresh(): void {
    window.location.reload();
}
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
