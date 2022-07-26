import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo: "login" , pathMatch: "full"},
  {path:'' , component: MainLayoutComponent , children:[
    {path : 'home' ,component: HomeComponent},
    {path : 'products' , component: ProductsComponent},
    {path : 'addAdmin', component: SignupComponent},
  ]},
  {path : 'login', component: LoginComponent},
  {path : "**" , component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
