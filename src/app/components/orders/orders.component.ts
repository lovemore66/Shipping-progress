import { Component, OnInit } from '@angular/core';
import { order } from 'src/app/models/order.interface';
import { OrdersService } from 'src/app/services/orders.service';
import { OrderStatus } from 'src/app/models/status.enum';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders$!: order[];
  activeRowIndex: number = -1;
  orderDetails$?: order = {
    orderId: 1567489,
    estimateDelivery: 'Sunday, May 2023',
    orderStatus: 'Pending',
    orderStatusProgress: {
      timeRequired: 3,
      timeSpent: 1.2,
    },
  };
  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.orders$ = this.ordersService.getOrders();
  }

  getOrderDetails(orderId: number, index: number) {
    this.activeRowIndex = index;
    this.orderDetails$ = this.orders$.find(
      (order) => order.orderId === orderId
    );
    return this.orderDetails$;
  }

  getOrderStatusClass(): string {
    const orderStatus = this.orderDetails$?.orderStatus;
    switch (orderStatus) {
      case OrderStatus.Pending:
        return 'pending';
      case OrderStatus.Shipped:
        return 'shipped';
      case OrderStatus.Delivered:
        return 'delivered';
      default:
        return 'unknown';
    }
  }
}
