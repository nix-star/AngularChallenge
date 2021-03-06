import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/interfaces';
import { ApiService } from 'src/app/services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() heroId: number;
  @Output() heroDeletion: EventEmitter<Event> = new EventEmitter<Event>();
  hero: Hero;

  constructor(private api: ApiService, public modal: NgbModal) { }

  ngOnInit(): void {
    this.setHero(this.heroId);
  }

  setHero(id: number): void {
    this.api.getHeroById(id).subscribe(hero => this.hero = hero);
  }

  getFullName(): string {
    return this.hero.biography['full-name'] === ""?
      this.hero.name: this.hero.biography['full-name'];
  }

  statVal(val: any): string {
    if(val ==='null') return '0%';
    return val.toString()+'%';
  }

  delete(event: Event): void {
    this.heroDeletion.emit(event);
  }

}
