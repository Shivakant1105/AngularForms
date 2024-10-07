import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';
import { AppRoutingModule } from './app-routing.module';
import { LoaderSpinnerComponent } from './loader/loader-spinner/loader-spinner.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorsComponent } from './errors/errors.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomEditorComponent } from './pages/custom-editor/custom-editor.component';
import { DropdownComponent } from './pages/dropdown/dropdown.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TempleteDrivenFormComponent,
    LoaderSpinnerComponent,
    LoginComponent,
    ErrorsComponent,
    HomeComponent,

    CustomEditorComponent,
    DropdownComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
