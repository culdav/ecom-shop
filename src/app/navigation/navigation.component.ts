import { AuthService } from './../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  signedIn: boolean = false;

  constructor(
    public authService: AuthService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.localStorageService.userValue.subscribe((user) => {
      this.signedIn = user !== 'null' ? true : false;
    });
  }
}
