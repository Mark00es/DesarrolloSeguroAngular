import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
  

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent {
  myForm: FormGroup;
  protected FormGroup!: FormGroup;

 
  constructor(private formBuilder: FormBuilder) {
    this.myForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    });
  }

}
