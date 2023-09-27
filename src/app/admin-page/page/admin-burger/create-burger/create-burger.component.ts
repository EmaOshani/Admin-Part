import { Component } from '@angular/core';
import { Burger } from '../admin-burger-list/admin-burger-list';
import { BurgerService } from '../admin-burger-list/admin-burger-list-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-burger',
  templateUrl: './create-burger.component.html',
  styleUrls: ['./create-burger.component.css']
})
export class CreateBurgerComponent {

  burgers : Burger = new Burger()

  constructor(private burgerService: BurgerService,
    private router: Router){ }
  
  ngOnInit(): void {
    
  }
  
  savePizza(){
    this.burgerService.createBurger(this.burgers).subscribe({next : data =>{
      console.log(data);
      this.goToBurgerList();
    },
   error : error => console.log(error)});
    
    
  }
  //
  goToBurgerList(){
  this.router.navigate(['menu/burgers']);
  }
  
  onSubmit(){
    console.log(this.burgers);
    this.savePizza();
    Swal.fire("Add new item is SUCCESS!")
  }
  }

