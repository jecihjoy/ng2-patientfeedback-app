import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { LoginComponent } from './login/login.component';
import { LocationsComponent } from './locations/locations.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ClinicTypeComponent } from './clinic-type/clinic-type.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SuccessComponent } from './success/success.component';
import { CancelPageComponent } from './cancel-page/cancel-page.component';

const appRoutes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'location',
    component: LocationsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'clinic',
    component: ClinicTypeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'survey',
    component: QuestionnaireComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'location/:location/cancel',
    component: CancelPageComponent
  },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  declarations: [

  ]
})
export class AppRoutingModule { }
