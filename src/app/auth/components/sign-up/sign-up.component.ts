import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  error = '';

  form: FormGroup = new FormGroup({
    displayName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  signUp(): void {
    this.authService.signUp(
      this.form.value.email,
      this.form.value.password,
      this.form.value.displayName
    );
  }
}
