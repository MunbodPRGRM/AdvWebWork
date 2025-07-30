import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import jsonData from '../../../assets/imdb.json';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  imports: [
    CommonModule, 
    MatButtonModule, 
    RouterModule, 
    MatCardModule, 
    MatIconModule
  ],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.scss'
})
export class MovieDetail {
  id = '';
  movie: any;
  json = jsonData;
  videoUrl: SafeResourceUrl | undefined;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private location: Location, 
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.movie = this.json.top10.find(item => item.id === this.id);

    if (this.movie?.videoUrl) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.videoUrl);
    }
  }

  goBack() {
    this.location.back();
  }
}
