import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupFrom:FormGroup;
  constructor() { }

  ngOnInit() {
    this.signupFrom=new FormGroup({
      'username':new FormControl(null),
      'email': new FormControl(null),
      'gender':new FormControl('male')
    })
  }

}
