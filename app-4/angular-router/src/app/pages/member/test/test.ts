import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  imports: [
    CommonModule, 
  ],
  templateUrl: './test.html',
  styleUrl: './test.scss'
})
export class Test {
  id = '';
  name = '';

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.queryParamMap.subscribe((params) => {
      this.name = this.activatedRoute.snapshot.queryParamMap.get('name') || 'No Name';
    });
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.name = this.activatedRoute.snapshot.queryParamMap.get('name') || 'No Name';
  }
}
