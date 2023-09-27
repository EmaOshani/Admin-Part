import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

items : any[];
filteredItems : any[];

constructor(private httpclient : HttpClient,
  private router : Router){}


  ngOnInit(): void {

    this.httpclient.get<any[]>('http://localhost:8080/api/v1/findAllOrder').subscribe(items => {
      this.items = items;
      this.filteredItems = items.filter(item => item.states === 'pending');
      const counterService = this.filteredItems.length;
      console.log('Number of cards displayed:', counterService);
    
     
  
    });
  
  
  }

  calculateTotalPriceById(orderId: string): number {
    let totalPrice = 0;
    for (const item of this.items) {
      if (item.id === orderId) {
        for (const product of item.products) {
          totalPrice += product.quantity * product.price;
        }
        break; // Break the loop if the ID is found
      }
    }
    return totalPrice;
  }

  confirmedOrder(orderId: string) {
    const endpoint = `http://localhost:8080/api/v1/updateOrderState/${orderId}`;
    const updatedState = 'confirem';
  
    this.httpclient.put(endpoint, { states: updatedState }).subscribe({
      next :response => {
        console.log('Order confirmed successfully');
        const order = this.items.find(item => item.id === orderId);
        if (order) {
          order.states = updatedState;
        }
     
      },
      error : error => {
        console.error('Error confirming order', error);
      }
  });
  }

  cancelOrder(orderId: string) {
    const endpoint = `http://localhost:8080/api/v1/updateOrderState/${orderId}`;
    const updatedState = 'cancle';
  
    this.httpclient.put(endpoint, { states: updatedState }).subscribe({
      next :response => {
        console.log('Order cancle successfully');
        const order = this.items.find(item => item.id === orderId);
        if (order) {
          order.states = updatedState;
        }
      },
      error : error => {
        console.error('Error confirming order', error);
      }
  });
  }

// confirm notification alert

confirmNotify(orderId: string ){
  Swal.fire({
    title : "<h2 style='color:White'>" +'Are you Sure This Confirmation ?'+"<br><br>"+"<h5 style='color:White'>"+'If you accept this then be ready to place the order'+   "</h2>",
    icon : 'info',
    showCancelButton : true,
    confirmButtonText : 'Yes Confirm it',
    confirmButtonColor : '#2cd54c',
    cancelButtonText : 'No keep it',
    cancelButtonColor : '#c61e1e',
    background : '#303A42'
  }).then((result) =>{ 
    if (result.value) {

      this.confirmedOrder(orderId);
      this.refreshPage();

    Swal.fire({
      icon : 'success',
      iconColor : '#2cd54c',
      title :"<h2 style='color:White'>" +'Confirmation Success ! ' +"<br><br>"+"<h5 style='color:White'>"+  'Your can print a bill and place the order'+"</h2>",
      background : '#303A42'
    })
  }
  else if (result.dismiss === Swal.DismissReason.cancel){
Swal.fire({
        icon : 'error',
        title: "<h2 style='color:White'>"+'Cancelled'+"<br><br>"+"<h5 style='color:White'>"+ 'Order not confirm yet  '+"</h2>",
        background : '#303A42'
      });
}      
 }) 


}
  
cancelNotify(orderId: string ){
  Swal.fire({
    title : "<h2 style='color:white'>" +'Are You Sure This Order Is Cancle ?'+"<br><br>"+"<h5 style='color:White'>"+'If you cancle this order it is cancle'+   "</h2>",
    icon : 'warning',
    iconColor : '#c61e1e',
    showCancelButton : true,
    confirmButtonText : 'Yes Cancle it',
    confirmButtonColor : '#c61e1e',
    cancelButtonText : 'No keep it',
    cancelButtonColor : '#34cbcb',
    background : '#303A42'
  }).then((result) =>{ 
    if (result.value) {

      this.cancelOrder(orderId);
      this.refreshPage();

    Swal.fire({
      icon : 'success',
      iconColor : '#c61e1e',
      title :"<h2 style='color:White'>" +' Order is cancle  <i class="fa fa-frown-o" aria-hidden="true"></i>  ! ' +"<br><br>"+"<h5 style='color:White'>"+  'Your can print a bill and place the order'+"</h2>",
      background : '#303A42'
    })
  }
  else if (result.dismiss === Swal.DismissReason.cancel){
Swal.fire({
        icon : 'error',
        iconColor : '#c61e1e',
        title: "<h2 style='color:White'>"+'Cancelled'+"<br><br>"+"<h5 style='color:White'>"+ 'Order not cancle yet  '+"</h2>",
        background : '#303A42'
      });
}      
 }) 


}


refreshPage(): void {
  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  const currentUrl = this.router.url + '?';
  this.router.navigateByUrl(currentUrl).then(() => {
    this.router.navigated = false;
    this.router.navigate([this.router.url]);
  });
}









}
