import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Activity } from './../../../models/activity';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-activityDetails',
  templateUrl: './activityDetails.component.html',
  styleUrls: ['./activityDetails.component.css']
})
export class ActivityDetailsComponent implements OnInit {
  public activity: any = [];
  public id: number;
  // public  titulo: string;
  // public  descripcion: string;
  // public  horaInicio: Date;
  // public  horaFinal: Date;
   public  category: Category;
   public  categoryId: number;


  message: string;

  constructor(private route: ActivatedRoute,
              public router: Router,
              public dataService: DataService,
              private _snackBar: MatSnackBar
  ) {
    this.id = this.route.snapshot.params.id;
   }

   openSnackBar(){
    this._snackBar.open('Acivity deleted successfully!', '' , {duration: 2000})
  }

  ngOnInit() {
    this.getActivityDetail();
  }

  

  getActivityDetail(){
    this.dataService.getActivityById(this.id).subscribe((activity: Activity) => {
      this.activity = activity;
    });
  }



}
