import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatCardModule, 
    MatInputModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  constructor(private router: Router) {}

  login() {
    this.router.navigateByUrl('/type');
  }
}
