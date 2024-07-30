import { Component, OnInit } from '@angular/core';
import { FormArray,  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm:FormGroup;
forbiddenUsernames=['shiva','vivek']

  constructor() { }

  ngOnInit() {
    this.signupForm=new FormGroup({
     
      'userData':new FormGroup({
        'username':new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      
    }),
    'gender':new FormControl('male'),
    'hobbies': new FormArray([])
   
      })
  }
onSubmit(){
  console.log(this.signupForm);
  
}
get controls() {
  return (this.signupForm.get('hobbies') as FormArray).controls;
}
onAddHobby(){
  const control=new FormControl( null, Validators.required);
(<FormArray>this.signupForm.get('hobbies')).push(control)
}

// custom validators name take not shiva and vivek
forbiddenNames(control:FormControl):{[s:string]:boolean}{
if(this.forbiddenUsernames.indexOf(control.value) !== -1){
  return{'nameIsForbidden':true}
}
return null
}
}
