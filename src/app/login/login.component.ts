import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ilogin } from '../models/ilogin';
import { AuthSetatusService } from '../auth-setatus.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  protected formLogin!: FormGroup;
  protected FormGroup!: FormGroup;
  static Login: any;

  constructor(private formBuilder: FormBuilder,
              private http:HttpClient,
              private authStatusService: AuthSetatusService,
              private router: Router) {
                this.formLogin = formBuilder.group({
                  usuario:['', Validators.required],
                  password:['', Validators.required],
                })
              }  
  Login(){
    let isLoggedIn = false;

    const usuarioLogin: Ilogin = {
      usuario: this.formLogin.value.usuario,
      password: this.formLogin.value.password
    }      
    console.log(usuarioLogin);
    if(usuarioLogin.usuario == "juan" && usuarioLogin.password =="123"){
      this.router.navigate(['/home']);
      isLoggedIn = true;
    }else{alert('Error en el login')}    
    this.authStatusService.setLoggedIn(isLoggedIn);    
  }
  ngOnInit() {
    this.FormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]      
    });    
  }
  siteKey:string ="6Le2YpMlAAAAAAsa1oHAmNFB3J4a3r8a1etqCQNn";
}
