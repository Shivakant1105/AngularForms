import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templete-driven-form',
  templateUrl: './templete-driven-form.component.html',
  styleUrls: ['./templete-driven-form.component.css']
})
export class TempleteDrivenFormComponent  {




  @ViewChild ('form') myFrom :NgForm
  defaultQuestion="pet"
  answer=''

  user={
    username:'',
    email:'',
    secret:'',
    question:''
  }
  submitted=false
  suggestUserName() {
    const suggestedName = 'Superuser';
// set the value in my form using this mesthod
    // this.myFrom.setValue({
    //   userData:{  
    //     username:suggestedName,
    //     email:''
    //   },
    //   secret:'',
    //   question:''
    // })

    // this below apporch is best way patch value only overwrite specific method 


    this.myFrom.form.patchValue({
      userData:{
        username:suggestedName
      }
    })
  }


  

// onSubmit(form:NgForm){
// console.log("form Submitted" ,form);

// }

// here use reference of my form from using viewchild
onSubmit(){

console.log(this.myFrom);
//  Display data  Using Form Data
this.submitted=true
this.user.username=this.myFrom.value.userData.username
this.user.email=this.myFrom.value.userData.email
this.user.secret=this.myFrom.value.secret
this.user.question=this.myFrom.value.question  

// reset my form
this.myFrom.reset()
}
}
