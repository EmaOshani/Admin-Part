import { Component } from '@angular/core';
import { Dessert } from './dessert-modal';
import { DessertService } from './dessertService';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dessert-list',
  templateUrl: './dessert-list.component.html',
  styleUrls: ['./dessert-list.component.css']
})
export class DessertListComponent {

  
  desserts: Dessert[];
  dessertsWasSelected: any;

  
  constructor (private dessertService: DessertService, 
    private router: Router) { }

  ngOnInit(): void { 
  this.getDesserts();
  } 
 
  private getDesserts(){
    this.dessertService.getDessertList().subscribe(data=>{
      this.desserts = data.filter(burger => burger.item === "Desserts");
    });
  }

  detailsDessert(id: number){
    this.router.navigate(['dessert-details', id]);
  }
  
  updateDessert(id: number){
    this.router.navigate(['update-dessert', id]);

  }


 createDessert(){
  this.router.navigate(['create-dessert'])
 }


  deleteDessert(id:number)
  {
    this.dessertService.deleteDessert(id).subscribe( data =>{
      console.log(data);
      this.getDesserts();
    })
    Swal.fire("Delete")
  }

  ondessertSelected( desserts : Dessert){
    this.dessertsWasSelected.emit(desserts);
  }
  
}
