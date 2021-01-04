
import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { verses } from './versesdb';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  constructor(private usersave:UsersService) {
   }
   uname: string='';
   uverse:any='';
   error:any='';
  ngOnInit(): void {

   
  }
  getVerse(){
  let  verse = verses[Math.floor(Math.random() * verses.length)];
  this.uverse=verse;
  }
  getName(name:any){
   
    if(!name){
      this.error='Please Enter your Name !'
      this.uverse='';
      
    }
    else{
      this.uname=name;
      this.error='';
      this.usersave.addUser(this.uname);

      this.getVerse();

    }
    


  }
}
