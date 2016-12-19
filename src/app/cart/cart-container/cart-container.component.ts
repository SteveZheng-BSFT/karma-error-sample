import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../shared/services';

@Component({
    selector: 'my-cart-container',
    templateUrl: './cart-container.component.html',
    styleUrls: ['./cart-container.component.scss']
})
export class CartContainerComponent implements OnInit {
    constructor(public service: DeviceService) {
    }

    ngOnInit() {
    }
}

// if you don't have src/app/app.module.ts set up, then you may declare this component manually to make it works
