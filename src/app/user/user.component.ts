import { Component, OnInit } from '@angular/core';
import { Repos } from '../repo';
 import { User } from '../user';
import { UserserviceService } from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user!: User;
  repo!: Repos;
  repoService: any;
  User!:any[];
  private username!:string;
  private clientid!:'';
  private clientSecret!:'';
  constructor(private myService: UserserviceService ) {
    this.myService.searchUSer().subscribe(User =>{
      console.log(this.user)
     
    });
  }
  
  getUserRepo(){
    return this.repo;
  }
  
   search(searchname: any) {
    
   }

  ngOnInit(): void {
    this.search('12moi');
  }

}
function searchname(searchname: any) {
  throw new Error('Function not implemented.');
}
