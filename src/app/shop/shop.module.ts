import { ShopRoutingModule } from './shop-routing.module';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ShopComponent } from './shop.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ShopComponent, ProductCardComponent, ProductListComponent],
  imports: [
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    ShopRoutingModule,
  ],
  exports: [ShopComponent],
})
export class ShopModule {}
