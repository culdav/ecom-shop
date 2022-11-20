import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  forbiddenNameValidator,
  samePasswordValidator,
} from '@app/auth/components/validators';
import { AuthService } from '@app/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.initForm();
  }

  signUp(): void {
    this.authService.signUp(
      this.form.value.email,
      this.form.value.password,
      this.form.value.displayName
    );
  }

  get displayName() {
    return this.form.get('displayName');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  private initForm(): void {
    this.form = new FormGroup(
      {
        displayName: new FormControl('', {
          validators: [
            Validators.required,
            forbiddenNameValidator(/^[^a-zA-Z]+$/),
          ],
        }),
        email: new FormControl('', {
          validators: [Validators.required, Validators.email],
        }),
        password: new FormControl('', {
          validators: [Validators.required],
        }),
        confirmPassword: new FormControl('', {
          validators: [Validators.required],
        }),
      },
      { validators: [samePasswordValidator] }
    );
  }
}
