import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Admin } from '../admin.model';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admins: Admin[] = [];



  
    constructor(private adminservice: AdminService, private router: Router) { }
  
    ngOnInit(): void {
      this.getadmins();
  
    }
    getadmins() {
      this.adminservice.getadmins().subscribe(data => {
        console.log(data); // Add this line to log the data to the console
        this.admins = data;
      });
    }
    verif(e: HTMLInputElement, p: HTMLInputElement) {
      var ok: Boolean = false;
      for (var i = 0; i < this.admins.length; i++) {
        if (e.value == this.admins[i].userName && p.value == this.admins[i].password) {
          ok = true;
  
        }
  
      }
      if (ok == false) {
        alert("email ou mot de passe invalid");
      }
      else {
        this.router.navigate(['/list']);
      }
  
  
    }
    
  
  }
