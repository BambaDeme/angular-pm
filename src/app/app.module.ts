import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductModule } from './products/product.module';

const appRoutes: Routes = [
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
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
