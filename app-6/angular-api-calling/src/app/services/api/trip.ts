import { Injectable, resolveForwardRef } from '@angular/core';
import { Constants } from '../../config/constants';
import { HttpClient } from '@angular/common/http';
import { last, lastValueFrom } from 'rxjs';
import { TripsGetResponse } from '../../model/response/trip_get_response';

@Injectable({
  providedIn: 'root'
})
export class Trip {
  constructor(private constants : Constants, private http: HttpClient) {}

  public async getTrip(options?: any) {
    const url = this.constants.API_ENDPOINT + '/trip';
    const response = await lastValueFrom(this.http.get(url));

    return response as TripsGetResponse[];
  }

  public async getOneTrip(id: number, options?: any) {
    const url = this.constants.API_ENDPOINT + '/trip/' + id;
    const response = await lastValueFrom(this.http.get(url));

    if (Array.isArray(response)) {
      return response as TripsGetResponse[];
    } else {
      return [response as TripsGetResponse];
    }
  }

  public async getTripByName(name: string, options?: any) {
    const url = this.constants.API_ENDPOINT + '/trip';
    const response = await lastValueFrom(this.http.get(url, { params: { name: name }}));

    if (Array.isArray(response)) {
      return response as TripsGetResponse[];
    } else {
      return [response as TripsGetResponse];
    }
  }

  public async addNewTrip(trip : any, options?: any) {
    const url = this.constants.API_ENDPOINT + '/trip';
    const response = await lastValueFrom(this.http.post(url, trip));

    return response;
  }
}
