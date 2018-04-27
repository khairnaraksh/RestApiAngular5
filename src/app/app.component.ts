import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import {  MyNewInterface } from './my-new-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent implements OnInit {
  title = 'app';
  _postsArray: MyNewInterface[];
//  _usersArray: MyNewInterface[];

      constructor(private apiService: ApiService) {

      }

      getPosts(): void {
        this.apiService.getPosts()
         .subscribe(
           resultArray => this._postsArray = resultArray,
          error => console.log("Error ::"+error)
         )
      }
      // getUsers(): void {
      //   this.apiService.getUsers()
      //    .subscribe(
      //      resultArray => this._usersArray = resultArray,
      //     error => console.log("Error ::"+error)
      //    )
      // }
       ngOnInit(): void {
        this.getPosts();
        //this.getUsers();
      }
}
