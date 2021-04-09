import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  textOverlay: string;
  constructor() {
    this.textOverlay = "Get your Tours into the Chernobyl Exclusion Zone today!"
  }

  ngOnInit(): void {
  }

}
