import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Travel } from './components/travel/travel';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    Travel
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-ui';
}
