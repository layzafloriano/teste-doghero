import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: [''],
    type: ['', Validators.required],
  });
  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signupForm.value)
  }

}
