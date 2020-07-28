import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { NgxPayPalModule } from 'ngx-paypal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from './components/layout/main/home/home.component';
import {MatListModule} from '@angular/material/list';
// tslint:disable-next-line: max-line-length
import { ConfectionarysAccessoriesComponent } from './components/layout/main/confectionarys-accessories/confectionarys-accessories.component';
import { CookieComponent } from './components/layout/main/cookie/cookie.component';
import { CakeComponent } from './components/layout/main/cake/cake.component';
import { BirthdaySuppliesComponent } from './components/layout/main/birthday-supplies/birthday-supplies.component';
import { GalleryComponent } from './components/layout/main/gallery/gallery.component';
import { GuideComponent } from './components/guide/guide.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SmallCartComponent } from './components/small-cart/small-cart.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { CakeListComponent } from './components/layout/main/cake/cake-list/cake-list.component';
import { CakeFiltersComponent } from './components/layout/main/cake/cake-filters/cake-filters.component';
import { CakeCardComponent } from './components/layout/main/cake/cake-card/cake-card.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ChocolateComponent } from './components/layout/main/chocolate/chocolate.component';
import { DessertComponent } from './components/layout/main/dessert/dessert.component';
import { MatStepperModule, MatInputModule, MatButtonModule } from '@angular/material';
import { CakeDetailsComponent } from './components/layout/main/cake/cake-details/cake-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationService } from './services/authentication.service';
import { InterceptorService } from './services/interceptor.service';
import { CreateCakeComponent } from './components/layout/main/cake/create-cake/create-cake.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatRadioModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    HomeComponent,
    ConfectionarysAccessoriesComponent,
    CookieComponent,
    CakeComponent,
    BirthdaySuppliesComponent,
    GalleryComponent,
    GuideComponent,
    AboutUsComponent,
    SmallCartComponent,
    MyAccountComponent,
    CakeListComponent,
    CakeFiltersComponent,
    CakeCardComponent,
    FooterComponent,
    ChocolateComponent,
    DessertComponent,
    CakeDetailsComponent,
    LoginComponent,
    RegisterComponent,
    CreateCakeComponent,

  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    MatRadioModule,
    FormsModule,
    MatStepperModule, MatInputModule, MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbToastModule,
    ToastrModule.forRoot(),
    NgxPayPalModule,
    MatListModule,
    DragDropModule],
  providers: [AuthenticationService, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
