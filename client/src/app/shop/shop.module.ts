import { SharedModule } from './../shared/shared.module';
import { ShopRoutingModule } from './shop-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [ShopComponent, ProductItemComponent, ProductDetailsComponent],
  imports: [CommonModule, ShopRoutingModule, SharedModule, ShopRoutingModule]
})
export class ShopModule {}
