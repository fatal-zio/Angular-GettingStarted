import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    // tslint:disable-next-line:no-inferrable-types
    pageTitle: string = 'Product List Up In Here';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    _listFilter: string;

    filteredProducts: IProduct[];
    products: IProduct[];

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter): this.products;
    }

    constructor(private productService: ProductService) {}

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();

        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage():void {
        this.showImage = !this.showImage;
    }

    ngOnInit() : void {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products,
                this.filteredProducts = this.products;
            },

            error => this.errorMessage = <any>error
        );        
    }

    onRatingClicked(message: string) : void {
        this.pageTitle = 'Product List: ' + message;
    }
}
