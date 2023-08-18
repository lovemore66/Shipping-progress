import { Injectable } from '@angular/core';
import { order } from '../models/order.interface';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders = [
    {
      orderId: 256785,
      estimateDelivery: 'Thursday, May 2023',
      orderStatus: 'Pending',
      orderStatusProgress: {
        timeRequired: 3,
        timeSpent: 1.2,
      },
    },
    {
      orderId: 995831,
      estimateDelivery: 'Monday, January 2019',
      orderStatus: 'Shipped',
      orderStatusProgress: {
        timeRequired: 5,
        timeSpent: 3,
      },
    },
    {
      orderId: 556724,
      estimateDelivery: 'Tuesday, August 2021',
      orderStatus: 'Delivered',
      orderStatusProgress: {
        timeRequired: 7,
        timeSpent: 7,
      },
    },
    {
      orderId: 880096,
      estimateDelivery: 'Sunda, July 2020',
      orderStatus: 'Unknown',
      orderStatusProgress: {
        timeRequired: 3,
        timeSpent: 1.2,
      },
    },
  ];

  constructor() {}

  getOrders(): order[] {
    return this.orders;
  }
}
