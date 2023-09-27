import { Component } from '@angular/core';
import { Burger } from './admin-burger-list';
import { BurgerService } from './admin-burger-list-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-burger-list',
  templateUrl: './admin-burger-list.component.html',
  styleUrls: ['./admin-burger-list.component.css']
})
export class AdminBurgerListComponent {

  burgers: Burger[];
  burgersWasSelected: any;

  
  constructor (private burgerService: BurgerService,
   
    private router: Router) { }

  ngOnInit(): void { 
  this.getBurgers();
  } 
 
  private getBurgers(){
    this.burgerService.getBurgerList().subscribe(data=>{
      this.burgers = data.filter(burger => burger.item === "Burger");
    });
  }

  detailsBurger(id: number){
    this.router.navigate(['admin-burger-details', id]);
  }
  
  updateBurger(id: number){
    this.router.navigate(['update-burger', id]);

  }


 createBurger(){
  this.router.navigate(['admin-create-burger'])
 }


  deleteBurger(id:number)
  {
    this.burgerService.deleteBurger(id).subscribe( data =>{
      console.log(data);
      this.getBurgers();
    })
    Swal.fire("Delete")
  }

  onburgerSelected( burgers : Burger){
    this.burgersWasSelected.emit(burgers);
  }
  
}



