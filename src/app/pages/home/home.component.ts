import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts: any[] = [];
  currentPage = 1;
  postsPerPage = 10;
  hasMorePosts = true; 
  ngOnInit(): void {

    this.postService.getPost().subscribe({
      next:(data:any)=>{
this.posts=data
console.log(data);

      }
    })
    // this.loadPosts();
  }

  // loadPosts(): void {
  //   this.postService.getPost(this.currentPage, this.postsPerPage)
  //     .subscribe({
  //       next: (data: any) => {
  //         if (data.length < this.postsPerPage) {
  //           this.hasMorePosts = false; // No more posts to load
  //         }
  //         this.posts = [...this.posts, ...data];
  //         this.currentPage++;
  //       },
  //       error: (err: any) => {
  //         console.error('Error fetching posts', err);
  //       }
  //     });
  // }

  // loadMore(): void {
  //   if (this.hasMorePosts) {
  //     this.loadPosts();
  //   }
  // }
}