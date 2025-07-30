import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Appdata {
  members = Array<MemberInfo>();
  constructor() {}
}

export class MemberInfo {
  id : number = 0;
  fullname : string = '';
  image : string = '';
}