import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url:string = 'http://localhost:3000/blogs';

  constructor(private http:HttpClient) { }

  getBlogData():Observable<Array<Blog>> {
    return this.http.get<Array<Blog>>(this.url);
  }

  addBlogData(blog:Blog):Observable<any> {
    return this.http.post(this.url, blog);
  }

}
