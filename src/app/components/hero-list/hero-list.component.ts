import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  herosId: number[] = [20, 45, 500, 322, 128, 256];

  constructor() { }

  ngOnInit(): void {
  }

}
