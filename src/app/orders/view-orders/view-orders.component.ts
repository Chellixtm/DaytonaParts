import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/_models/order.model';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css'],
})
export class ViewOrdersComponent implements OnInit {
  orders: Order[] = [
    {
      partName: 'Part 1',
      vehicle: '2005 Ford E-350',
      vendor: 'Amazon',
      partNumber: '11237098',
      dateExpected: new Date('02/06/2022'),
      dateOrdered: new Date('02/04/2022'),
    },
    {
      partName: 'Part 2',
      vehicle: '2015 Toyota 4runner',
      vendor: 'Ebay',
      partNumber: '2617234',
      dateExpected: new Date('02/09/2022'),
      dateOrdered: new Date('02/04/2022'),
    },
    {
      partName: 'Part 3',
      vehicle: '1970 Cheverolet Camero',
      vendor: 'KSI',
      partNumber: '1987634',
      dateExpected: new Date('02/07/2022'),
      dateOrdered: new Date('02/04/2022'),
    },
    {
      partName: 'Part 4',
      vehicle: '2007 Dodge Ram',
      vendor: 'Ebay',
      partNumber: '3872654',
      dateExpected: new Date('02/08/2022'),
      dateOrdered: new Date('02/04/2022'),
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
