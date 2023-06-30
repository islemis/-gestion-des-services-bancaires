import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  

  constructor(private adminservice:AdminService,private router:Router,private http: HttpClient) { }

  ngOnInit(): void {
  }
  logout() {
    this.http.get('/logout').subscribe(() => {
      // navigate to login page
    });
    this.router.navigate(['/login']); 
    console.log("here");
    
  }

}