import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard.guard';

const routes: Routes = [  
  { path: '', redirectTo: '/login',pathMatch:"full"},
  { path: 'home', component: HomepageComponent,
    canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: '**', component: LoginComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
