import { Component } from '@angular/core';
import { Dessert } from '../dessert-list/dessert-modal';
import { DessertService } from '../dessert-list/dessertService';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-dessert',
  templateUrl: './create-dessert.component.html',
  styleUrls: ['./create-dessert.component.css']
})
export class CreateDessertComponent {


  desserts : Dessert = new Dessert()

  constructor(private dessertService: DessertService,
    private router: Router){ }
  
  ngOnInit(): void {
    
  }
  
  saveDessert(){
    this.dessertService.createDessert(this.desserts).subscribe({next : data =>{
      console.log(data);
      this.goToDessertList();
    },
   error : error => console.log(error)});
    
    
  }
  //
  goToDessertList(){
  this.router.navigate(['admin-menu/desserts']);
  }
  
  onSubmit(){
    console.log(this.desserts);
    this.saveDessert();
    Swal.fire("Add new item is SUCCESS!")
  }
  }



