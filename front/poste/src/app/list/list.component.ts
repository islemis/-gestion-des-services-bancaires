import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @HostBinding('class') classes ='row';
client: any =[];
   constructor(private router: Router,private AdminService :AdminService ) { }
 
   ngOnInit(): void {
     this.getclients();
   }
   getclients(){
     this.AdminService.getClients().subscribe(
       res => {
         this.client= res;
       },
 
       err => console.error(err)
     );
   }
   deleteclient(id:string) {
    if (window.confirm('Are you sure you want to delete '  + ' '  + ' ?')) {
      this.AdminService.deleteClient(id).subscribe(
        res => {
       console.log(res);
     this.reloadCurrentRoute()
        },
        
        err => console.error(err)
      );;
    }

  }

   reloadCurrentRoute() {
     let currentUrl = this.router.url;
     this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
     this.router.navigate([currentUrl]);
     });
 }
}
