import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Trip } from '../../services/api/trip';

@Component({
  selector: 'app-postput',
  imports: [
    CommonModule, 
    RouterModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    FormsModule, 
    MatButtonModule
  ],
  templateUrl: './postput.html',
  styleUrl: './postput.scss'
})
export class Postput {
  name: string = '';
  destination: number | null = null;
  country: string = '';
  coverimage: string = '';
  detail: string = '';
  price: number = 0;
  duration: number = 0;

  destinations: Destination[] = [
    { value: 1, name: 'เอเชีย' }, 
    { value: 2, name: 'ยุโรป' }, 
    { value: 3, name: 'เอเชียตะวันออกเฉียงใต้' }, 
    { value: 9, name: 'ประเทศไทย' },
  ];

  constructor(private http: HttpClient, private tripService : Trip) {}

  async addNew() {
    const body = {
      name: this.name, 
      country: this.country, 
      destinationid: this.destination, 
      coverimage: this.coverimage, 
      detail: this.detail, 
      price: this.price, 
      duration: this.duration
    };

    // const url = 'http://192.168.1.6:3000/trips';
    // const response = await lastValueFrom(this.http.post(url, body));
    const response = await this.tripService.addNewTrip(body)
    
    console.log(response);
  }
}

interface Destination {
  value: number;
  name: string;
}