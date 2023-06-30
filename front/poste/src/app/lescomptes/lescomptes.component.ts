import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-lescomptes',
  templateUrl: './lescomptes.component.html',
  styleUrls: ['./lescomptes.component.css']
})
export class LescomptesComponent implements OnInit {

  @HostBinding('class') classes ='row';
  compte: any =[];
  constructor(private router: Router,private AdminService :AdminService ) { }

  ngOnInit(): void {
    this.getComptes();
  }
  getComptes(){
    this.AdminService.getcomptes().subscribe(
      res => {
        this.compte= res;
      },

      err => console.error(err)
    );
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate([currentUrl]);
    });
}
deleteCompte(id:number) {
  if (window.confirm('Are you sure you want to delete '  + ' '  + ' ?')) {
    this.AdminService.deleteCompte(id).subscribe(
      res => {
     console.log(res);
   this.reloadCurrentRoute()
      },
      
      err => console.error(err)
    );;
  }

}

}
