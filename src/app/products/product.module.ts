import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';


const appRoutes: Routes = [
  {
    path:'products',component:ProductListComponent,
  },
  {
    path:'products/:id',canActivate:[ProductDetailGuard],component:ProductDetailComponent,
  },
  
];
@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    SharedModule
  ]
})
export class ProductModule { }
