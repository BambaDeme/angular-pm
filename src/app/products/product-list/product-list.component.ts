import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PorductService } from '../porduct.service';
import { IProduct } from '../products';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy {

  title: string = "Products List"
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];

  showImage: boolean = false;
  private _listFilter: string = '';
  errorMessage: string = '';

  sub!: Subscription;

  constructor(private productService: PorductService) { }

  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err,
    });
  }

  onToggleImage():void{
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) => 
    product.productName.toLowerCase().includes(filterBy))
  }

  onRatingClicked(message: string): void{
    this.title = "Product List "+ message
  }

  ngOnDestroy():void{
    this.sub.unsubscribe();
  }
}
