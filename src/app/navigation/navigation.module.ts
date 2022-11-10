import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NavigationComponent } from './navigation.component';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    SharedModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
  ],
  exports: [NavigationComponent],
})
export class NavigationModule {}
