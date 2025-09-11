import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
],
  templateUrl: './type.html',
  styleUrl: './type.scss'
})
export class Type {
  constructor(private router: Router) {}

  goTo(type: string) {
    this.router.navigate(['/list', type]);
  }
}
