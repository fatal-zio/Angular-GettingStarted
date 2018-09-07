import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Dettail';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) {  }

  ngOnInit() {
    //this plus sign is a casting operator to cast from string to numeric.
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      "productId": 17,
      "productName": "Ninja",
      "productCode": "NJX-6746",
      "releaseDate": "May 1, 2018",
      "description": "Cute ninja",
      "price": 49.99,
      "starRating": 4.4,
      "imageUrl": "http://media.openclipart.org/people/GDJ/50px-1535162072.png"
    }
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
