import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  public searchName:string= 'Enter Username here'
  @Output() searchResults = new EventEmitter<any>()
  constructor() {}

  searchUser(){
    this.searchResults.emit(this.searchName);

  }

  ngOnInit(): void {
  }

}
