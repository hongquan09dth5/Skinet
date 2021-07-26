import { error } from 'protractor';
import { BasketService } from './basket/basket.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';
  constructor(private basketService: BasketService) {}

  ngOnInit() {
    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe(
        (response) => {
          console.log('Initialised basket');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
