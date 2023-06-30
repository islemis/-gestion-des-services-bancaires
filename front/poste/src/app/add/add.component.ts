import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  @HostBinding('class') clases = 'row';
  Compte: any = {
   cin:0,
   id	:0,
   type:"",
   code_postal	:0,
   RIB	:0,
   solde:0
   };
  constructor(private service:AdminService ,private activatedRoute: ActivatedRoute , private router:Router
    ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params["id"]) {
      this.service.getcompte(params["id"])
        .subscribe(
          res => {
            console.log(this.Compte);
            console.log("hello");
          },
          err => console.log(err)
        )
    }
  }
  createCompte() {

    this.service.createCompte(this.Compte)
    
    .subscribe(
     res => {
       console.log(res);
       this.router.navigate(['/acceuil']);
      
            },
     err =>
     
       console.log(err)
   )
  
}
  
}
