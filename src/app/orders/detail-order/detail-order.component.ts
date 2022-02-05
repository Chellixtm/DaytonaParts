import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/_models/order.model';

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.css'],
})
export class DetailOrderComponent implements OnInit {
  @Input() order: Order;

  daysTill: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.order);
    this.daysTill = this.daysTillArrival();
    console.log(this.daysTill);
  }

  daysTillArrival() {
    var result;
    const days = this.order.dateExpected.getDate() - this.order.dateOrdered.getDate();

    if (days <= 0) {
      result = 'Today';
    } else {
      result = `in ${days} days`;
    }

    return result;
  }
}
