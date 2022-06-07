import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  herosId: number[];// = [20, 45, 500, 322, 128, 256];

  constructor() { }

  ngOnInit(): void {
      this.updateIdsFromLocalStorage();
  }

  getIds(): number[]{
    let aux = localStorage.getItem("heroesIds")?.split(',').map(n=>parseInt(n));
    return aux !== undefined? aux: [];
  }

  updateIdsFromLocalStorage(): void {
    this.herosId = this.getIds();
  }

  storeIds(list: number[]): void {
    localStorage.setItem("heroesIds", list.join(','));
  }

  delete(index: number): void {
    let aux: number[] = this.getIds();
    aux.splice(index, 1);
    this.storeIds(aux);
    this.updateIdsFromLocalStorage();
  }

}
