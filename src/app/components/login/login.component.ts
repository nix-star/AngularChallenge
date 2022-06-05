import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Token } from 'src/app/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  heroForm!: FormGroup;
  showEmailRequire: boolean = false;
  showPassRequire: boolean = false;
  showInvalid: boolean = false;
  token!: Token;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.heroForm = this.fb.group({
      email: ["", [Validators.required, Validators.email, Validators.minLength(1)]],
      password: ["", [Validators.required, Validators.minLength(1)]]
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    this.showInvalid = false;
    this.showEmailRequire = this.Email!.value.length === 0? true: false; 
    this.showPassRequire = this.Pass!.value.length === 0? true: false;
    let validCredentials: boolean = !this.showPassRequire && !this.showPassRequire;

    if(validCredentials){
      this.api.getToken({
        "email": this.Email!.value,
        "password": this.Pass!.value
      }).subscribe(token =>{
        localStorage.setItem("heroToken", token.token);
        this.router.navigate(["index"]);
      });
      this.showInvalid = true;        
    }
  }

  get Email() {
    return this.heroForm.get('email');
  }

  get Pass() {
    return this.heroForm.get('password');
  }

}
