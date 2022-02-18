import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  gotUser:any=User;
  repos:any=Repo

constructor(public userService:UserService) {
}
search(myname:any){
this.userService.getDetails(myname).then((success:any)=>{
  this.gotUser = this.userService.gotUser;
},
(error:any)=>{
  console.log('enter name')
});
this.userService.getReDetails(myname).then((success:any)=>{
  this.repos = this.userService.repos;
},
(error:any)=>{
  console.log('repo not found')
}
);
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // searchUser(myname:string){
  //   this.userService.getDetails(myname).then((success:any)=>{
  //     this.gotUser = this.userService.gotUser;
  //   },
  //   (error:any)=>{
  //     console.log('enter name')
  //   });
  //   this.userService.getReDetails(myname).then((success:any)=>{
  //     this.repos = this.userService.repos;
  //   },
  //   (error:any)=>{
  //     console.log('repo not found')
  //   }
  //   );
  // }
}
