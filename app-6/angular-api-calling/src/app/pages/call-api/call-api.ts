import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { routes } from '../../app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { TripsGetResponse } from '../../model/response/trip_get_response';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { Trip } from '../../services/api/trip';

@Component({
  selector: 'app-call-api',
  imports: [
    MatButtonModule, 
    CommonModule, 
    MatFormFieldModule, 
    MatInputModule
  ],
  templateUrl: './call-api.html',
  styleUrl: './call-api.scss'
})
export class CallApi implements OnInit {
  trips: TripsGetResponse[] = [];

  constructor(private http: HttpClient, private tripService: Trip) {}

  ngOnInit(): void {
      this.loadDataAsync();
      console.log('Init State');
  }

  async loadDataAsync() {
    this.trips = await this.tripService.getTrip();
  }

  async callApi() {
    // const url = 'http://192.168.1.6:3000/trips';

    // let data = await lastValueFrom(this.http.get(url));
    // this.trips = data as TripsGetResponse[];
    this.trips = await this.tripService.getTrip();

    console.log(this.trips);
    console.log(this.trips[0].name);
    console.log('Call Completed');
  }

  async findOne(input: HTMLInputElement) {
    // console.log(input.value);

    // const url = `http://192.168.1.6:3000/trips/${input.value}`;
    // let data = await lastValueFrom(this.http.get(url));
    // this.trips = Array.isArray(data) ? data as TripsGetResponse[] : [data as TripsGetResponse];
    this.trips = await this.tripService.getOneTrip(+input.value);

    console.log(this.trips);
    console.log(this.trips[0].name);
    console.log('Call Complete');
  }

  async findName(input: HTMLInputElement) {
  console.log('Searching name:', input.value);

  // const url = 'http://192.168.1.6:3000/trips';
  // let data = await lastValueFrom(this.http.get(url, { params: { name: input.value }}));

  // this.trips = Array.isArray(data) ? data as TripsGetResponse[] : [data as TripsGetResponse];

  this.trips = await this.tripService.getTripByName(input.value);

  console.log(this.trips);
  console.log(this.trips[0].name);
  console.log('Call Completed');
}

}
