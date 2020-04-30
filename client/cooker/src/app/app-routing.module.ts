import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/layout/main/home/home.component';
import { CakeComponent } from './components/layout/main/cake/cake.component';
import { CookieComponent } from './components/layout/main/cookie/cookie.component';
import { BirthdaySuppliesComponent } from './components/layout/main/birthday-supplies/birthday-supplies.component';
import { ConfectionarysAccessoriesComponent } from './components/layout/main/confectionarys-accessories/confectionarys-accessories.component';
import { GalleryComponent } from './components/layout/main/gallery/gallery.component';
import { GuideComponent } from './components/guide/guide.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { DessertComponent } from './components/layout/main/dessert/dessert.component';
import { ChocolateComponent } from './components/layout/main/chocolate/chocolate.component';
import { CakeDetailsComponent } from './components/layout/main/cake/cake-details/cake-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateCakeComponent } from './components/layout/main/cake/create-cake/create-cake.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'cake',
        children: [
          { path: '', component: CakeComponent },
          { path: 'cake-details/:id', component: CakeDetailsComponent }
        ]
      },
      { path: 'cookie', component: CookieComponent },
      { path: 'birthdaySupplies', component: BirthdaySuppliesComponent },
      { path: 'confectionarysAccessories', component: ConfectionarysAccessoriesComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'chocolate', component: ChocolateComponent },
      { path: 'dessert', component: DessertComponent },
    ]
  },
  { path: 'guide', component: GuideComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create', component: CreateCakeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
