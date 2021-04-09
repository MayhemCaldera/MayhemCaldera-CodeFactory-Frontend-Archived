import { Component, OnInit, DoCheck } from '@angular/core';
// import { blogContent } from '../blogContent';   <--- brauchen wir nicht
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit, DoCheck {
  // blogContent = blogContent;           <---- brauchen wir nicht weil es ständig auf ein leeres array weist. 
  content;
  constructor(public blogService: BlogService) { }

  ngOnInit(): void {

  }
  ngDoCheck() {                                       /*<--- serri meint es könnte auch ohne DoCheck funktionieren*/
    this.content = this.blogService.getBlog();
    console.table(this.content);
  }

}
