import { Component, OnInit } from '@angular/core';

export interface CheckoutItem {
  id: number;
  title: string;
  imageUrl: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  items: CheckoutItem[] = [
    {
      id: 1,
      title: 'Brown Brim',
      imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
      quantity: 1,
      price: 25,
    },
    {
      id: 2,
      title: 'Blue Beanie',
      imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
      quantity: 3,
      price: 18,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
