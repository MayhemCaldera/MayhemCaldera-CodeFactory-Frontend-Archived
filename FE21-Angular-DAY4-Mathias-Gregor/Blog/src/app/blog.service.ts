import { Injectable } from '@angular/core';
import { blogContent } from './blogContent'
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogInfo = [blogContent];
  constructor() { }

  addToBlog(text) {

    this.blogInfo.push(text)
    console.log(text)
  }

  getBlog() {

    return this.blogInfo;

  }


}
