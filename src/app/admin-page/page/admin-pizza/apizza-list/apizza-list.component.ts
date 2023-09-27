import { Component } from '@angular/core';
import { Pizza } from './apizza';
import { Router } from '@angular/router';
import { PizzaService } from './apizza-service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-apizza-list',
  templateUrl: './apizza-list.component.html',
  styleUrls: ['./apizza-list.component.css']
})
export class ApizzaListComponent {
  pizzas: Pizza[];
  pizzasWasSelected: any;

  
  constructor (private pizzaService: PizzaService,
   
    private router: Router) { }

  ngOnInit(): void { 
  this.getPizzas();
  } 
 
  private getPizzas(){
    this.pizzaService.getPizzaList().subscribe(data=>{
      this.pizzas = data;
    });
  }

  detailsPizza(id: number){
    this.router.navigate(['pizza-details', id]);
  }
  
  updatePizza(id: number){
    this.router.navigate(['update-pizza', id]);

  }


 createPizza(){
  this.router.navigate(['create-pizza'])
 }


  deletePizza(id:number)
  {
    this.pizzaService.deletePizza(id).subscribe( data =>{
      console.log(data);
      this.getPizzas();
    })
    Swal.fire("Delete")
  }

  onpizzaSelected( pizzas : Pizza){
    this.pizzasWasSelected.emit(pizzas);
  }
  
}


