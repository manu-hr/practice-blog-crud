import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent{

  blog: Blog = {};
  constructor(private blogService:BlogService) { }

  saveBlog() {
    if(!this.blog)
      return;
    this.blog.id = Math.floor(Math.random() * 50);
    this.blog.author = 'Author 1';
    
    this.blogService.addBlogData(this.blog).subscribe({
      next : (data) =>{
        console.log(data);        
        alert("Blog Added")
      },
      error : (error) =>{
        console.log(error);        
        alert(error.message)
      }
    }
    )
  }
}
