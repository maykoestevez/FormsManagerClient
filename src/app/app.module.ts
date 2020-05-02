import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormControlComponent } from './components/dynamic-form-control/dynamic-form-control.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormControlDataService } from './services/form-controls-data.service';
import { FormControlService } from './services/form-control.service';
import { FormManagerModule } from './form-manager/form-manager.module';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormControlComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormManagerModule
  ],
  providers: [FormControlDataService, FormControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
