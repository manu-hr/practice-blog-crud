import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css']
})
export class ViewBlogsComponent implements OnInit {

  blogs: Blog[] = [];

  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.fetchBlog();    
  }

  fetchBlog():void {
    this.blogService.getBlogData().subscribe({
      next : (data) =>{
        console.log(data);
        this.blogs = data;        
      },
      error : err => alert(err.message)
    })
  }

}
