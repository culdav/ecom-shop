import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Select } from '@ngxs/store';
import { AppState } from '@redux/app.state';
import { Product, ProductSelectors } from '@redux/product';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  @Input()
  products$!: Observable<Product[]>;

  @Select(AppState.getLoading) loading$!: Observable<boolean>;

  ngOnInit(): void {}
}
