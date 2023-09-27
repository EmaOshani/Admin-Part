import { Component } from '@angular/core';
import { Pizza } from '../apizza-list/apizza';
import { PizzaService } from '../apizza-list/apizza-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-pizza',
  templateUrl: './create-pizza.component.html',
  styleUrls: ['./create-pizza.component.css']
})
export class CreatePizzaComponent {

  formGroup! : FormGroup;
  pizzas : Pizza = new Pizza()
 
  

  constructor(private pizzaService: PizzaService,
    private router: Router, private FormBuilder : FormBuilder){ }
  
  ngOnInit(): void {
    
     // validations 
     this.formGroup = this.FormBuilder.group({
      name: ['', [Validators.required, this.validateFoodName]],
      smallprice : ['', [Validators.required, this.validateSmallPrice]],
       largeprice: ['', [Validators.required, this.validateLargePrice]],
       mediumprice: ['', [Validators.required, this.validateMediumPrice]]
      
    });
  }
  
  savePizza(){
    this.pizzaService.createPizza(this.pizzas).subscribe({next : data =>{
      console.log(data);
      this.goToPizzaList();
    },
   error : error => console.log(error)});
    
    
  }
  //
  goToPizzaList(){
  this.router.navigate(['user-menu/pizzas']);
  }
  
  onSubmit(){
    console.log(this.pizzas);
    this.savePizza();

    if(
      this.pizzas.smallprice <= 0 ||
      this.pizzas.mediumprice <= 0 ||
      this.pizzas.largeprice <= 0
    ){
       // Display an error message or perform any desired action
    console.log('Prices must be greater than zero');
    return; // Stop form submission
    }
    Swal.fire("Add new item is SUCCESS!")
  }

  validateFoodName(control: AbstractControl): { [key: string]: boolean } | null {
    const namePattern = /^[A-Za-z\s]+$/; // Regular expression to allow only alphabets and spaces
  
    if (!namePattern.test(control.value)) {
      return { invalidName: true };
    }
  /*   const words = control.value.split(' ');
    if (words.length < 3) {
      return { insufficientWords: true };
    } */
  
    return null;
  }

  validateSmallPrice(control: AbstractControl): { [key: string]: boolean } | null {
    const pricePattern = /^[0-9\s]+$/;
     // Check if price is empty
  if (pricePattern) {
    return { required: true };
  }
    return null;
  }

  validateLargePrice(control: AbstractControl): { [key: string]: boolean } | null {
    const pricePattern = /^[0-9\s]+$/;
     // Check if price is empty
  if (pricePattern) {
    return { required: true };
  }
    return null;
  }
  
  validateMediumPrice(control: AbstractControl): { [key: string]: boolean } | null {
    const pricePattern = /^[0-9\s]+$/;
     // Check if price is empty
  if (pricePattern) {
    return { required: true };
  }
    return null;
  }

}

