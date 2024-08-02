import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';
import { DealyGuard } from './dealy.guard';


const routes: Routes = [
  { path: '', redirectTo: 'reactive-form', pathMatch: 'full' },
  { path: 'reactive-form', component: ReactiveFormComponent,canActivate:[DealyGuard] },
  { path: 'template-form', component: TempleteDrivenFormComponent,canActivate:[DealyGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
