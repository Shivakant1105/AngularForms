import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';
import { DealyGuard } from './dealy.guard';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login' ,component:LoginComponent},
  { path: 'reactive-form', component: ReactiveFormComponent,canActivate:[DealyGuard] },
  { path: 'template-form', component: TempleteDrivenFormComponent,canActivate:[DealyGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
