import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DropdownComponent } from '../pages/dropdown/dropdown.component';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  baseUrl: 'http://99.99.99.185:8089/spike';

  constructor(private http: HttpClient) {}
  // https://jsonplaceholder.typicode.com/posts
  // getPost(page: number, limit: number): Observable<any[]> {
  //   const params = { _page: page.toString(), _limit: limit.toString() };
  //   return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts', { params });
  // }
  getPost() {
    return this.http.get(
      'http://99.99.99.185:8089/spike/blog/get-all?pageNum=0&pageSize=5'
    );
  }

  createPost(data: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
  getAllUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/employees`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getUserById(id: number) {
    return this.http.get(`${this.baseUrl}/user/self/${id}`);
  }

  private openDropdownSubject = new Subject<DropdownComponent>();
  openDropdown$ = this.openDropdownSubject.asObservable();

  open(dropdown: DropdownComponent) {
    this.openDropdownSubject.next(dropdown);
  }
}
