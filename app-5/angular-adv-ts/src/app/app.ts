import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Advts } from "./advts/advts";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Advts],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-adv-ts';
}
