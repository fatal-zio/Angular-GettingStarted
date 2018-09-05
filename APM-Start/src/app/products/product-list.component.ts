import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    // tslint:disable-next-line:no-inferrable-types
    pageTitle: string = 'Product List Up In Here';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string;

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter): this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
          },
          {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
          },
          {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
          },
          {
            "productId": 17,
            "productName": "Ninja",
            "productCode": "NJX-6746",
            "releaseDate": "May 1, 2018",
            "description": "Cute ninja",
            "price": 49.99,
            "starRating": 4.4,
            "imageUrl": "http://media.openclipart.org/people/GDJ/50px-1535162072.png"
          }  
    ];

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();

        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage():void {
        this.showImage = !this.showImage;
    }

    ngOnInit() : void {
        console.log('In OnInit');
    }

    onRatingClicked(message: string) : void {
        this.pageTitle = 'Product List: ' + message;
    }
}
