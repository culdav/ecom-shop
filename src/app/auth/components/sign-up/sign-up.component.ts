import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '@app/core';
import {
  combineLatest,
  debounceTime,
  startWith,
  Subject,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  displayNameError = '';
  emailError = '';
  confirmPasswordError = '';

  form: FormGroup = new FormGroup({
    displayName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.form
      .get('displayName')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe((displayName) => {
        if (displayName !== '') {
          var format = /^[^a-zA-Z]+$/;
          format.test(displayName)
            ? (this.displayNameError =
                'Display name cannot start with special characters or numbers.')
            : (this.displayNameError = '');
        } else {
          this.displayNameError = '';
        }
      });

    this.form
      .get('email')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe((email) => {
        if (email !== '') {
          var format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          format.test(email)
            ? (this.emailError = '')
            : (this.emailError = 'Please enter a valid email.');
        } else {
          this.emailError = '';
        }
      });

    this.form
      .get('password')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe((password) => {
        if (this.form.value.confirmPassword === password) {
          this.confirmPasswordError = '';
        } else {
          this.confirmPasswordError = 'Passwords do not match.';
        }
      });

    this.form
      .get('confirmPassword')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe((confirmPassword) => {
        if (this.form.value.password === confirmPassword) {
          this.confirmPasswordError = '';
        } else {
          this.confirmPasswordError = 'Passwords do not match.';
        }
      });
  }

  signUp(): void {
    this.authService.signUp(
      this.form.value.email,
      this.form.value.password,
      this.form.value.displayName
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
