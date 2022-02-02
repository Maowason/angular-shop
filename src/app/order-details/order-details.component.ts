import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'shared/services/order-details.service';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service'
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  providers: [OrderDetailsService]
})
export class OrderDetailsComponent {
  orders$;
  
  
  constructor(
    private authService: AuthService,
    private orderService: OrderService) { 

    this.orders$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
  }
}