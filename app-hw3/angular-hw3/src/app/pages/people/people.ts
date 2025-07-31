import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import jsonData from '../../../assets/imdb.json';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';

@Component({
  selector: 'app-people',
  imports: [
    RouterModule, 
    CommonModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule, 
  ],
  templateUrl: './people.html',
  styleUrl: './people.scss'
})
export class People {
  id = '';
  actor: any;
  json = jsonData;
  personVideoUrl: SafeResourceUrl | undefined;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private location: Location, 
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.actor = this.json.bornToday.find(item => item.id === this.id);

    if (!this.actor) {
      this.actor = this.json.otherPerson.find(item => item.id === this.id);
    }

    if (this.actor?.personVideoUrl) {
      this.personVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.actor.personVideoUrl);
    }
  }

  goBack() {
    this.location.back();
  }
}
