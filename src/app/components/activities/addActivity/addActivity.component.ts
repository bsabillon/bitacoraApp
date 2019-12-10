import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

import { DataService } from '../../../services/data.service';
import { Activity } from '../../../models/activity';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-addActivity',
  templateUrl: './addActivity.component.html',
  styleUrls: ['./addActivity.component.css']
})
export class AddActivityComponent implements OnInit {
  id: number;
  titulo: string;
  descripcion: string;
  horaInicio: Date;
  horaFinal: Date;
  category: string;


  
  constructor(public router: Router, public dataService: DataService, private _snackBar: MatSnackBar) { }



  openSnackBar(){
    this._snackBar.open('Activity added successfully!','',{duration: 4000})
  }
  ngOnInit() {
  }

  addActivity() {
    const activity: Activity = {
      id: this.id,
      titulo: this.titulo,
      descripcion: this.descripcion,
      horaInicio: this.horaInicio,
      horaFinal: this.horaFinal,
      category: this.category
    }

    
   
    this.dataService.postActivity(activity).subscribe((data)=>{
      this.dataService.activity=activity;
      this.router.navigate(['/activities']);
      this.openSnackBar();
      
    })

    

  }


}
