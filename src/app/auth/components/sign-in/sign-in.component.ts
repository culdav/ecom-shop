import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  error = '';

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  signIn(): void {
    this.authService.signIn(this.form.value.email, this.form.value.password);
  }

  googleSignIn(): void {
    this.authService.googleAuth();
  }
}
