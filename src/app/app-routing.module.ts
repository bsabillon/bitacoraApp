import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WeeklyComponent } from './components/reports/weekly/weekly.component';
import { DailyComponent } from './components/reports/daily/daily.component';
import { ActivitiesComponent } from './components/activities/activities/activities.component';
import { AddActivityComponent } from './components/activities/addActivity/addActivity.component';
import { UpdateActivityComponent } from './components/activities/updateActivity/updateActivity.component';
import { ActivityDetailsComponent } from './components/activities/activityDetails/activityDetails.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reports/weekly', component: WeeklyComponent },
  { path: 'reports/daily', component: DailyComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'addActivity', component: AddActivityComponent },
  { path: 'updateActivity/:id', component: UpdateActivityComponent },
  { path: 'activityDetails/:id', component: ActivityDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
