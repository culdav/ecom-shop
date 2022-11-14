import { AuthService } from '../core/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalStorageService } from '@app/core/local-storage.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  // private destroy$: Subject<void> = new Subject<void>();
  // signedIn: boolean = false;

  constructor(
    public authService: AuthService,
    public localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    // this.localStorageService.userValue
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((user) => {
    //     this.signedIn = user !== 'null' ? true : false;
    //   });
  }

  ngOnDestroy(): void {
    // this.destroy$.next();
    // this.destroy$.complete();
    // this.destroy$.unsubscribe();
  }
}
