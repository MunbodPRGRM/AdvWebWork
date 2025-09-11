import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule, 
    MatToolbarModule, 
    MatButtonModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(public router: Router) {}

  logout() {
    this.router.navigateByUrl('/');
  }
}
