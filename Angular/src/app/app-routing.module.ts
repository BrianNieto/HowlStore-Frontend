import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AboutusComponent} from "./components/aboutus/aboutus.component";
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {StoreComponent} from "./components/store/store.component";
import {DetailsComponent} from "./components/details/details.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutusComponent},
  {path: '', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'store', component:StoreComponent},
  {path: 'details', component:DetailsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
