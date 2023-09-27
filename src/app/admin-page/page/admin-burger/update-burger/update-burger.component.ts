import { Component, OnInit } from '@angular/core';
import { Burger } from '../admin-burger-list/admin-burger-list';
import { BurgerService } from '../admin-burger-list/admin-burger-list-service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-burger',
  templateUrl: './update-burger.component.html',
  styleUrls: ['./update-burger.component.css']
})
export class UpdateBurgerComponent implements OnInit {
   id: number;
   burgers : Burger = new Burger();

  constructor(private burgerService: BurgerService,
    private http : HttpClient,
    private route: ActivatedRoute,
    private router: Router){ }
  
  ngOnInit(): void {
   
    this.id = this.route.snapshot.params['id']; // Get the id parameter from the route
    this.burgerService.getBurgerById(this.id).subscribe({
      next: data => {
        this.burgers = data;
      },
      error: error => console.log(error)
    });
  }
  
 
  
 onSubmit(){
  this.burgerService.updateBurger(this.id, this.burgers).subscribe({ next : data => {
    this.goToBurgerList();
  }, 
  error : error => console.log(error)});
  Swal.fire("Updated!")
  
 }

 goToBurgerList(){
  this.router.navigate(['menu/burgers']);
  }

} 


