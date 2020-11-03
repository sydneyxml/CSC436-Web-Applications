import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-request',
  templateUrl: './travel-request.component.html',
  styleUrls: ['./travel-request.component.css']
})
export class TravelRequestComponent implements OnInit {

  origination="ORD";
  destination="BOS";
  travelDate: Date;
  numTravelers: number = 1;
  price: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calculatePrice(): void {
    this.price = this.numTravelers * 150;
  }
}
