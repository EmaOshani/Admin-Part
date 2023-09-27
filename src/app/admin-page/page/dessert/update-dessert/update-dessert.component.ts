import { Component, OnInit } from '@angular/core';
import { Dessert } from '../dessert-list/dessert-modal';
import { DessertService } from '../dessert-list/dessertService';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-dessert',
  templateUrl: './update-dessert.component.html',
  styleUrls: ['./update-dessert.component.css']
})
export class UpdateDessertComponent implements OnInit {
  id: number;
  desserts : Dessert = new Dessert();

 constructor(private dessertService: DessertService,
   private http : HttpClient,
   private route: ActivatedRoute,
   private router: Router){ }
 
 ngOnInit(): void {
  
   this.id = this.route.snapshot.params['id']; // Get the id parameter from the route
   this.dessertService.getDessertById(this.id).subscribe({
     next: data => {
       this.desserts = data;
     },
     error: error => console.log(error)
   });
 }
 

 
onSubmit(){
 this.dessertService.updateDessert(this.id, this.desserts).subscribe({ next : data => {
   this.goToDessertList();
 }, 
 error : error => console.log(error)});
 Swal.fire("Updated!")
 
}

goToDessertList(){
 this.router.navigate(['menu/desserts']);
 }

} 
{

}
