import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  iCompteur: number;

  sVisitorName: string = '';
  name:string = "";
  constructor() { this.iCompteur = 0;}

  ngOnInit(): void {
  }
  compteur()
  {
    this.iCompteur++;
  }

}
