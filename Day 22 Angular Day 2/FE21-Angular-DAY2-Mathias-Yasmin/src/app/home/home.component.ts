import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carAdd = new FormGroup({
    brandName: new FormControl("", Validators.required),
    modelName: new FormControl("", Validators.required)
  })

  onSubmit() {
    if (this.carAdd.valid) {
      let a = this.carAdd.value;
      this.cars.push(a);
    }
  }


  brandName: string;
  modelName: string;



  cars = [
    {
      brandName: "bmw",
      modelName: "x4",


    },
    {
      brandName: "fiat",
      modelName: "y4",


    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
