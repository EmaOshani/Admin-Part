import { Component, OnInit } from '@angular/core';
import { Pizza } from '../apizza-list/apizza';
import { PizzaService } from '../apizza-list/apizza-service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-pizza',
  templateUrl: './update-pizza.component.html',
  styleUrls: ['./update-pizza.component.css']
})
export class UpdatePizzaComponent implements OnInit {
  id: number;
  pizzas : Pizza = new Pizza();

  constructor(private pizzaService: PizzaService,
    private http : HttpClient,
    private route: ActivatedRoute,
    private router: Router){ }
  
  ngOnInit(): void {
   
    this.id = this.route.snapshot.params['id']; // Get the id parameter from the route
    this.pizzaService.getPizzaById(this.id).subscribe({
      next: data => {
        this.pizzas = data;
      },
      error: error => console.log(error)
    });
  }
  

  selectedSize: string = '';
  selectedPrice: number = 0;
  
    selectSize(size, price) {
      console.log(`Selected size: ${size}, Price: ${price}`);
      this.selectedSize = size;
      this.selectedPrice = price;
  
      this.pizzas.size = size; 
      this.pizzas.smallprice = price; // Update the size property of the pizza object 
    }
  
 onSubmit(){
  this.pizzaService.updatePizza(this.id, this.pizzas).subscribe({ next : data => {
    this.goToPizzaList();
  }, 
  error : error => console.log(error)});
  Swal.fire("Updated!")
  
 } 

 goToPizzaList(){
  this.router.navigate(['menu/pizzas']);
  }

    updatePizzaDetails() {
    this.pizzaService.updatePizza(this.id, this.pizzas).subscribe({next :
      data => {
        console.log(data);
        Swal.fire('Pizza details updated!');
      },
    error :  error => {
        console.log(error);
      }
  });
}

}
