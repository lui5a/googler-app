import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registrationForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.setValues();
  }

  setValues() {
    this.registrationForm = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });
  }

  register() {
    const userName = this.registrationForm.get('userName')?.value;
    const password = this.registrationForm.get('password')?.value;
    const user = {
      user: userName,
      password: password,
    };
    localStorage.setItem('user', JSON.stringify(user));
    if (user) {
      this.router.navigateByUrl('/dashboard');
    }
  }
}
