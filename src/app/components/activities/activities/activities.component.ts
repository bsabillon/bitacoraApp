import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Activity } from './../../../models/activity';
import { DataService } from '../../../services/data.service';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class

ActivitiesComponent implements OnInit {
  public activities: any = [];



  constructor(public router: Router, public dataService: DataService) { }

  ngOnInit() {
    this.getActivities();
  }

  getActivities() {
    this.dataService.getActivities().subscribe((activity: Activity) => {
      this.dataService.activity = activity;
      this.activities = activity;
    });
  }


}
