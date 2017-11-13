import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { TeacherDashComponent } from './components/teacher-dash/teacher-dash.component';
import { StudentDashComponent } from './components/student-dash/student-dash.component';
import { ParentDashComponent } from './components/parent-dash/parent-dash.component';
import { StudentWorkComponent } from './components/student-work/student-work.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  {path:'', component:NewAccountComponent},
  {path:'', component:LoginComponent},
  {path:'', component:TeacherDashComponent},
  {path:'', component:StudentDashComponent},
  {path:'', component:ParentDashComponent},
  {path:'', component:StudentWorkComponent},
  {path:'', component:NavbarComponent}  
];

@NgModule({
  declarations: [
    AppComponent,
    NewAccountComponent,
    LoginComponent,
    TeacherDashComponent,
    StudentDashComponent,
    ParentDashComponent,
    StudentWorkComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
