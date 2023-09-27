import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pizza
import { AdminPizzaComponent } from './admin-page/page/admin-pizza/admin-pizza.component';
import { ApizzaListComponent } from './admin-page/page/admin-pizza/apizza-list/apizza-list.component'; 
import { ApizzaDetailsComponent } from './admin-page/page/admin-pizza/apizza-details/apizza-details.component';
import { UpdatePizzaComponent } from './admin-page/page/admin-pizza/update-pizza/update-pizza.component';
import { CreatePizzaComponent } from './admin-page/page/admin-pizza/create-pizza/create-pizza.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminMenuComponent } from './admin-page/admin-menu/admin-menu.component';
import { AdminHeaderComponent } from './admin-page/admin-header/admin-header.component';

import { PageComponent } from './admin-page/page/page.component';

//Burger
import { AdminBurgerListComponent } from './admin-page/page/admin-burger/admin-burger-list/admin-burger-list.component';
import { CreateBurgerComponent } from './admin-page/page/admin-burger/create-burger/create-burger.component';
import { UpdateBurgerComponent } from './admin-page/page/admin-burger/update-burger/update-burger.component';
import { AdminBurgerDetailsComponent } from './admin-page/page/admin-burger/admin-burger-details/admin-burger-details.component';
import { DashboardComponent } from './admin-page/dashboard/dashboard.component';
import { PendingComponent } from './admin-page/dashboard/pending/pending.component';
import { ComfiremComponent } from './admin-page/dashboard/comfirem/comfirem.component';
import { CancelComponent } from './admin-page/dashboard/cancel/cancel.component';
import { SendMailComponent } from './admin-page/dashboard/send-mail/send-mail.component';
import { DessertListComponent } from './admin-page/page/dessert/dessert-list/dessert-list.component';
import { CreateDessertComponent } from './admin-page/page/dessert/create-dessert/create-dessert.component';
import { UpdateDessertComponent } from './admin-page/page/dessert/update-dessert/update-dessert.component';
import { DessertDetailsComponent } from './admin-page/page/dessert/dessert-details/dessert-details.component';




const routes: Routes = [
  {path: 'admin-menu', component: AdminMenuComponent , children :[  
    {path: 'pizzas', component: ApizzaListComponent},
    {path: '', redirectTo: 'pizzas',pathMatch: 'full'},
    {path : 'burgers', component : AdminBurgerListComponent},
    {path: 'desserts' ,component : DessertListComponent},
   
 
    
    
   
    
   ]
   },

  

   //pizza
  {path: 'create-pizza', component: CreatePizzaComponent},
  {path: 'update-pizza/:id', component: UpdatePizzaComponent },
  {path : 'pizza-details/:id' , component : ApizzaDetailsComponent}, 
  
  
  //Burger
  {path: 'admin-create-burger', component : CreateBurgerComponent},
  {path: 'update-burger/:id' , component: UpdateBurgerComponent },
  {path : 'admin-burger-details/:id' , component:AdminBurgerDetailsComponent},

  //Dessert
  {path : 'create-dessert' , component : CreateDessertComponent},
  {path : 'update-dessert/:id' , component: UpdateDessertComponent},
  {path: 'dessert-details/:id' , component : DessertDetailsComponent},

  {path: 'page' , component: PageComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path : 'dashboard/pending' , component : PendingComponent},
  {path : 'dashboard/confirme' , component: ComfiremComponent},
  {path : 'dashboard/cancel', component : CancelComponent},
  {path :'dashboard/send' , component : SendMailComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
