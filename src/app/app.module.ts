import { NgModule, createComponent } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PageComponent } from './admin-page/page/page.component';
import { AdminMenuComponent } from './admin-page/admin-menu/admin-menu.component';
import { AdminHeaderComponent } from './admin-page/admin-header/admin-header.component';

import { AdminPizzaComponent } from './admin-page/page/admin-pizza/admin-pizza.component';
import { ApizzaDetailsComponent } from './admin-page/page/admin-pizza/apizza-details/apizza-details.component';
import { ApizzaListComponent } from './admin-page/page/admin-pizza/apizza-list/apizza-list.component';
import { CreatePizzaComponent } from './admin-page/page/admin-pizza/create-pizza/create-pizza.component';
import { UpdatePizzaComponent } from './admin-page/page/admin-pizza/update-pizza/update-pizza.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AdminBurgerComponent } from './admin-page/page/admin-burger/admin-burger.component';
import { AdminBurgerListComponent } from './admin-page/page/admin-burger/admin-burger-list/admin-burger-list.component';
import { AdminBurgerDetailsComponent } from './admin-page/page/admin-burger/admin-burger-details/admin-burger-details.component';
import { CreateBurgerComponent } from './admin-page/page/admin-burger/create-burger/create-burger.component';
import { UpdateBurgerComponent } from './admin-page/page/admin-burger/update-burger/update-burger.component'
import { DashboardComponent } from './admin-page/dashboard/dashboard.component';
import { ComfiremComponent } from './admin-page/dashboard/comfirem/comfirem.component';
import { PendingComponent } from './admin-page/dashboard/pending/pending.component';
import { CancelComponent } from './admin-page/dashboard/cancel/cancel.component';
import { SendMailComponent } from './admin-page/dashboard/send-mail/send-mail.component';
import { AdminSidenavComponent } from './admin-page/admin-sidenav/admin-sidenav.component';
import { CreateComponent } from './admin-page/page/create/create.component';
//
import { DessertComponent } from './admin-page/page/dessert/dessert.component';
import { DessertDetailsComponent } from './admin-page/page/dessert/dessert-details/dessert-details.component';
import { DessertListComponent } from './admin-page/page/dessert/dessert-list/dessert-list.component';
import { CreateDessertComponent } from './admin-page/page/dessert/create-dessert/create-dessert.component';
import { UpdateDessertComponent } from './admin-page/page/dessert/update-dessert/update-dessert.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    PageComponent,
    AdminMenuComponent,
    AdminHeaderComponent,
    AdminSidenavComponent,
    CreateComponent,

    AdminPizzaComponent,
    ApizzaDetailsComponent,
    ApizzaListComponent,
    CreatePizzaComponent,
    UpdatePizzaComponent,
    AdminBurgerComponent,
    AdminBurgerListComponent,
    AdminBurgerDetailsComponent,
    CreateBurgerComponent,
    UpdateBurgerComponent,
    DashboardComponent,
    PendingComponent,
    CancelComponent,
    ComfiremComponent,
    SendMailComponent,
    //
    DessertComponent,
    DessertDetailsComponent,
    DessertListComponent,
    CreateDessertComponent,
    UpdateDessertComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
