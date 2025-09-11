import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import jsonData from '../../../assets/data.json';

@Component({
  selector: 'app-list',
  imports: [
    CommonModule, 
    MatCardModule
  ],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {
  coffeeList = jsonData.Coffee; // ดึง array ของ Coffee ออกมา
}
