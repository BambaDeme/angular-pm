import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PorductService } from '../porduct.service';
import { IProduct } from '../products';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit,OnDestroy {

  pageTitle: string = "Product Detail";
  product: IProduct | undefined;
  sub!: Subscription;
  constructor(private route: ActivatedRoute,private productService: PorductService,private router:Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sub = this.productService.getProductById(id).subscribe({
      next: product => this.product = product,
      error: err => console.log(err)
    });
    
  }

  ngOnDestroy():void{
    this.sub.unsubscribe();
  }

  onBack():void{
    this.router.navigate(['/products']);
  }

}
