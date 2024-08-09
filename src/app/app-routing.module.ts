import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';
import { DealyGuard } from './dealy.guard';
import { LoginComponent } from './auth/login/login.component';
import { ErrorsComponent } from './errors/errors.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomEditorComponent } from './pages/custom-editor/custom-editor.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login' ,component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'editor',component:CustomEditorComponent},
  { path: 'reactive-form', component: ReactiveFormComponent,canActivate:[DealyGuard] },
  { path: 'template-form', component: TempleteDrivenFormComponent,canActivate:[DealyGuard]  },
  { path: '**', component: ErrorsComponent, data: { error: 404 } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
