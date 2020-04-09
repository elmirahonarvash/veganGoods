import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: any;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      fullName:"",
      email:"",
      phoneNumber:"",
      address:"",
      birthDate:"",
      checkBox:"",
    })
  }

}
