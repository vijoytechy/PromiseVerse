
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
   
  ngOnInit(): void {

   
  }
  getVerse(){
  let  verse = verses[Math.floor(Math.random() * verses.length)];
  this.uverse=verse;
  }
  getName(name:any){
   
   
    this.uname=name;
    this.usersave.addUser(this.uname);
    this.getVerse();


  }
}
