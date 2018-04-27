import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
import { MyNewInterface } from './my-new-interface';

@Injectable()
export class ApiService {

  private _postsURL= "https://jsonplaceholder.typicode.com/posts";
 // private _postsURL2="https://jsonplaceholder.typicode.com/users";

  constructor(private http: Http) { }

  getPosts(): Observable<MyNewInterface[]> {
    return this.http 
       .get(this._postsURL)
       .map((response: Response) => {
         return <MyNewInterface[]>response.json();
      })
      .catch(this.handleError);
  }
  // getUsers(): Observable<MyNewInterface[]> {
  //   return this.http 
  //      .get(this._postsURL2)
  //      .map((response: Response) => {
  //        return <MyNewInterface[]>response.json();
  //     })
  //     .catch(this.handleError);
  // }
    private handleError(error: Response){
      return Observable.throw(error.statusText);
    }

}
