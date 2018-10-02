import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';

import { AppComponent } from './app.component';
import { SurveyComponent } from './survey.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';

import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LocalStorageService } from './services/local-storage.service';
import { SessionStorageService } from './services/session-storage.service';
import { SessionService } from './services/session.service';


import { HttpService } from './services/http.service';
import { LocationsComponent } from './locations/locations.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ClinicTypeComponent } from './clinic-type/clinic-type.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SuccessComponent } from './success/success.component';
import { CancelPageComponent } from './cancel-page/cancel-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SurveyEditorComponent } from './survey.editor.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    QuestionnaireComponent,
    LoginComponent,
    LocationsComponent,
    ClinicTypeComponent,
    WelcomeComponent,
    SuccessComponent,
    CancelPageComponent,
    SurveyEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  exports: [MatCardModule],
  providers: [
    HttpService,
    AuthGuard,
    AuthenticationService,
    AuthGuardService,
    LocalStorageService,
    SessionService,
    SessionStorageService,],
    entryComponents: [QuestionnaireComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
