import { Component, HostBinding, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  @HostBinding('class') clases = 'row';
  selectedOption: string = '';
  Client: any = {
idc:0,
nom	:'',
prenom	:'',
cin	:0,
tel	:0,
adresse:'',	
email	:'',
password	:'',
sexe: '',

username:''
    
  };
  constructor(private service:AdminService ,private router :Router, private activatedRoute: ActivatedRoute ) { }


  ngOnInit() {
    this.selectedOption = 'femme'; 

    const params = this.activatedRoute.snapshot.params;
    if (params["idc"]) {
      this.service.getClient(params["idc"])
        .subscribe(
          res => {
            console.log(this.Client);
            console.log("hello");
          },
          err => console.log(err)
        )
    }
    
  }
 

  createClient() {

     this.service.createClient(this.Client)
     
     .subscribe(
      res => {
        console.log(res);
        console.log(this.Client);
        this.router.navigate(['/list']);      },
      err =>
      
        console.log(err)
    )
   
}
   
 }
   