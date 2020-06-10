import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegistrationComponent } from './modules/auth/registration/registration.component';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { ArticlePageComponent } from './modules/home/article-page/article-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'article', component: ArticlePageComponent },
  { path: 'signIn', component: LoginComponent },
  { path: 'signUp', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
