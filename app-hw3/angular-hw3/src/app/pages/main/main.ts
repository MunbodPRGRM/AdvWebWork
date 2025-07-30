import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import jsonData from '../../../assets/imdb.json';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatCardModule, 
    RouterModule, 
  ],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  top10 = jsonData.top10;
  bornToday = jsonData.bornToday;

  constructor() {}
}
