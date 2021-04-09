import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  inputs = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    age: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required)
  })
  constructor() { }
  onSubmit() {
    if (this.inputs.valid) {
      let a = this.inputs.value;
      console.table(a);
    }
  }

  ngOnInit(): void {
  }

}
