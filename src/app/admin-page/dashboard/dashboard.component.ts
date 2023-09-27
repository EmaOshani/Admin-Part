import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CounterService } from './counterService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 
  items : any[];
  filteredItems : any[];

  PendingCount : number;
  ConfirmeCount : number;
  cancelCount : number;

  constructor( private router : Router,
               private counterService : CounterService,
               private httpclient : HttpClient){}

 
               ngOnInit(): void {

                this.httpclient.get<any[]>('http://localhost:8080/api/v1/findAllOrder').subscribe(items => {
                this.items = items;
                this.filteredItems = items.filter(item => item.states === 'pending');
                const cardCount = this.filteredItems.length;
                this.counterService.setCount(cardCount);
                this.PendingCount = cardCount;  });

                this.httpclient.get<any[]>('http://localhost:8080/api/v1/findAllOrder').subscribe(items => {
                this.items = items;
                this.filteredItems = items.filter(item => item.states === 'confirem');
                const cardCount = this.filteredItems.length;
                 this.counterService.setCount(cardCount);
                 this.ConfirmeCount= cardCount;  });

                 this.httpclient.get<any[]>('http://localhost:8080/api/v1/findAllOrder').subscribe(items => {
                this.items = items;
                this.filteredItems = items.filter(item => item.states === 'cancle');
                const cardCount = this.filteredItems.length;
                this.counterService.setCount(cardCount);
                this.cancelCount  = cardCount;  });


               }

               
  pendingOrder(){
    this.router.navigate(['dashboard/pending'])
  }
  comfiremOrder(){
    this.router.navigate(['dashboard/confirem'])
  }

  cancelOrder(){
    this.router.navigate(['dashboard/cancel'])
  }


}
