import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.css']
})
export class AdminSidenavComponent {

  constructor(private route : Router){}

  onpizza(){
    this.route.navigate(['admin-menu/pizzas'])
  }

  onburger(){
    this.route.navigate(['admin-menu/burgers'])
  }
 
 onDessert(){
this.route.navigate(['admin-menu/desserts'])

 }
}
