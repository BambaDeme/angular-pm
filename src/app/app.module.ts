import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';

const appRoutes: Routes = [
  {
    path:'products',component:ProductListComponent,
  },
  {
    path:'products/:id',canActivate:[ProductDetailGuard],component:ProductDetailComponent,
  },
  {
    path:'welcome',component:WelcomeComponent
  },
  {
    path:'',redirectTo:'welcome',pathMatch:'full'
  },
  {
    path:'**',redirectTo:'welcome',pathMatch:'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
