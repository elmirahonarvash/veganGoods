import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent}
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
