import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { HttpClient } from '@angular/common/http';
import { Client } from '../client.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @HostBinding('class') classes = 'row'; // corrected typo
 
  client: Client = { // corrected typo, used Client model instead of 'any'
    idc: 0,
    nom: '',
    prenom: '',
    cin: 0,
    tel: 0,
    adresse: '',
    email: '',
    password: '',
    sexe: '',
    username: ''
  }; 
       
  constructor(
    private adminService: AdminService, // corrected typo
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}
  
  ngOnInit() {
    const idc = this.activatedRoute.snapshot.params['idc']; // corrected variable name and used 'const' instead of 'let'
    console.log(idc);
    this.adminService.getClient(idc)
      .subscribe(
        res => {
          this.client = res;
          console.log(this.client);
        },
        err => console.log(err)
      );
  }
  
  updateClient() { // corrected method name to follow Angular naming convention
    const idc = this.activatedRoute.snapshot.params['idc'];
    //console.log(this.client);
    this.adminService.updateClient(this.client,idc) ; // corrected argument to pass the correct idc value
    this.router.navigate(["/list"]);
    
      
  }
}
