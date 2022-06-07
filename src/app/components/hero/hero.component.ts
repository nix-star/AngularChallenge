import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() heroId: number;
  hero: Hero;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.setHero(this.heroId);
  }

  setHero(id: number): void {
    this.api.getHeroById(id).subscribe(hero => this.hero = hero);
  }



}
