import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  // https://jsonplaceholder.typicode.com/posts
  // getPost(page: number, limit: number): Observable<any[]> {
  //   const params = { _page: page.toString(), _limit: limit.toString() };
  //   return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts', { params });
  // }
  getPost() {
    
return this.http.get('https://fakestoreapi.com/products')
  }


  createPost(data:any){
   
    return this.http.post('https://jsonplaceholder.typicode.com/posts',data)
  }



}
