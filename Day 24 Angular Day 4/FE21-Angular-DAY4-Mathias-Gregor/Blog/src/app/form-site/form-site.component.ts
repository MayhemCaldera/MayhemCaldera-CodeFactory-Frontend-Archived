import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { BlogService } from '../blog.service'
@Component({
  selector: 'app-form-site',
  templateUrl: './form-site.component.html',
  styleUrls: ['./form-site.component.css']
})
export class FormSiteComponent implements OnInit {
  blogEntry: any;
  constructor(public formBuilder: FormBuilder, public blogService: BlogService) {

    this.blogEntry = this.formBuilder.group({

      entryText: "",
      name: "",
      dateTime: "",
      place: ""

    });

  }

  addToBlog(blogEntry) {
    this.blogService.addToBlog(blogEntry);
    console.log(this.blogService.blogInfo);
  };


  ngOnInit(): void {
  }

}
