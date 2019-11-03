import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WeeklyComponent} from '../app/components/reports/weekly/weekly.component';
import { DailyComponent} from '../app/components/reports/daily/daily.component';
import { ActivitiesComponent } from './components/activities/activities/activities.component';
import { AddActivityComponent } from './components/activities/addActivity/addActivity.component';
import { UpdateActivityComponent } from './components/activities/updateActivity/updateActivity.component';
import { ActivityDetailsComponent } from './components/activities/activityDetails/activityDetails.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent, DailyComponent, WeeklyComponent, ActivitiesComponent, AddActivityComponent,
    UpdateActivityComponent, ActivityDetailsComponent

  ],
  imports: [
    BrowserModule, HttpClientModule,
    ReactiveFormsModule, FormsModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatCardModule, MatFormFieldModule, MatIconModule,
    MatInputModule, MatButtonModule, MatListModule, MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
