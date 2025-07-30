import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-advts',
  imports: [],
  templateUrl: './advts.html',
  styleUrl: './advts.scss'
})
export class Advts implements OnInit {
  @Input() myProp: any;

  ngOnInit(): void {
  console.log(this.myProp);
  }

  clickMe() {
    console.log('Yes you have clicked me');    
  }

  onInputChange($event: Event) {
    let target = $event.target as HTMLInputElement;
    console.log(target.value);
  }
}
