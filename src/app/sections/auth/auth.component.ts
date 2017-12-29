import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

type UserFields = 'email' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  hide = true;
  userForm: FormGroup;
  loginError = '';
  formErrors: FormErrors = {
    'email': '',
    'password': '',
  };
  validationMessages = {
    'email': {
      'required': 'Введите Email адрас.',
      'email': 'Email должен иметь вид name@domain.com[ru]',
    },
    'password': {
      'required': 'Введите пароль.',
      'pattern': 'Пароль должен содержать минимум 1 букву и 1 цыфру.',
      'minlength': 'Пароль должен быть не короче 6 символов.',
      'maxlength': 'Пароль должен быть не длиннее 40 символов.',
    },
  };

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.buildForm();
  }

  login() {
    this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password']).then(
      (user) => {
        console.log(user.email + ' logged in');
      },
      (error) => {
        switch (error.code) {
          case 'auth/wrong-password': {
            this.loginError = 'Вы не правильно ввели пароль';
            break;
          }
          case 'auth/user-not-found': {
            this.loginError = 'Пользователь не найден';
            break;
          }
          default: {
            this.loginError = 'Что то пошло не так :(';
            break;
          }
        }
      });
  }

  buildForm() {
    this.userForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email,
      ]],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
      ]],
    });

    this.userForm.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  // Updates validation state on form changes.
  onValueChanged(data?: any) {
    if (!this.userForm) { return; }
    const form = this.userForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password')) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key) ) {
                this.formErrors[field] += `${(messages as {[key: string]: string})[key]} \n`;
              }
            }
          }
        }
      }
    }
  }
}
