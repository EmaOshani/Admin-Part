import { Component } from '@angular/core';
import { Foods } from './create-modal';
import { FoodsService } from './create-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  food : Foods = {
    item: '',
    name: '',
    price: 0,
    imageURL: '',
    details: '',
    id: 0
  };

  constructor(private foodsService : FoodsService,
    private router : Router){}

  ngOnInit(): void {
    
  }
  
  saveFoods(){
    this.foodsService.createFoods(this.food).subscribe({next : data =>{
      console.log(data);
      this.goToFoodsList();
    },
   error : error => console.log(error)});
    
    
  }
  //
  goToFoodsList(){
  this.router.navigate(['menu/burgers']);
  }
  
  onSubmit(){
    console.log(this.food);
    this.saveFoods();
    Swal.fire("Add new item is SUCCESS!")
  }
}
