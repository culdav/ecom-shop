import { Component, Input, OnInit } from '@angular/core';

interface Product {
  title: string;
  imageUrl: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input()
  products: Product[] = SHOP_DATA;

  constructor() {}

  ngOnInit(): void {}
}

const SHOP_DATA = [
  {
    id: 1,
    title: 'Brown Brim',
    imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
    category: 'men',
    price: 25,
  },
  {
    id: 2,
    title: 'Blue Beanie',
    imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
    category: 'men',
    price: 18,
  },
  {
    id: 3,
    title: 'Brown Cowboy',
    imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
    category: 'women',
    price: 35,
  },
  {
    id: 4,
    title: 'Grey Brim',
    imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
    category: 'women',
    price: 25,
  },
  {
    id: 5,
    title: 'Green Beanie',
    imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
    category: 'women',
    price: 18,
  },
  {
    id: 6,
    title: 'Palm Tree Cap',
    imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
    category: 'kids',
    price: 14,
  },
  {
    id: 7,
    title: 'Red Beanie',
    imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
    category: 'kids',
    price: 18,
  },
  {
    id: 8,
    title: 'Wolf Cap',
    imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
    category: 'kids',
    price: 14,
  },
  {
    id: 9,
    title: 'Blue Snapback',
    imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
    category: 'men',
    price: 16,
  },
];
