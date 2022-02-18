import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repo!: Repo;
  constructor( ) {
    // public repoService: UserserviceService, private http:HttpClient
   }
 
  repoSearch(searchName: any){
    
  }
  ngOnInit(): void {
  }

}
