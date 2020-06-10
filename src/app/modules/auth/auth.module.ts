import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [LoginComponent, RegistrationComponent],
  providers: [],
})
export class AuthModule {}
