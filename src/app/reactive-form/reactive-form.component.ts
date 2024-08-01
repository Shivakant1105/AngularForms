import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgModel,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['shiva', 'vivek'];

  // formArray: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
    // valuechange obs
    // this.signupForm.valueChanges.subscribe(
    //   (value)=>console.log("valueChanges==>",value)
      
    // )
    // statusChanges
    // this.signupForm.statusChanges.subscribe(
    //   (status)=>console.log("statusChanges==>",status)
      
    // )

    // setvalue
    this.signupForm.setValue({
      'userData':{
        'username':'gautam',
        'email': ''
      },
      'gender':'male',
      'hobbies':[]
    })

    // patchvalue
    this.signupForm.patchValue({
      'userData':{
        'username':'Shiva kant'
      }
    })
  }
  onSubmit() {
    console.log(this.signupForm);
  }
  // get controls() {
  //   return this.signupForm.get('hobbies') as FormArray;
  // // }
  // onAddHobby() {
  //   //   const control=new FormControl( null, Validators.required);
  //   // (<FormArray>this.signupForm.get('hobbies')).push(control)
  //   let formGroup = this.fb.group({
  //     hobby: new FormControl('', [Validators.required]),
  //   });
  //   // this.controls.push(formGroup);
  //  let formArray = this.signupForm.get('hobbies') as FormArray;
  //  formArray.push(formGroup)
  // }

  onAddHobby(){
    const control=new FormControl( null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  // custom validators name take not shiva and vivek
  forbiddenNames(control: NgModel): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  // Creating a Custom Async Validator

  forbiddenEmails(control:FormControl):Promise<any> | Observable<any>
  {
    const promise=new Promise<any>((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value ==='test@gmail.com'){
          resolve({'emailIsForbidden':true})
        }
        else{
          resolve(null)
        }
      },1000)
    })
    return promise
  }

}
