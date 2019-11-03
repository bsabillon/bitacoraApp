import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { Activity } from '../models/activity';

@Injectable({
    providedIn: 'root'
  })
export class DataService {
    public category: Category;
    public activity: Activity;
    headers = new HttpHeaders({'Content-Type' : 'application/json'});
    public endpoint = 'http://localhost:5000/api';



constructor(private http: HttpClient, public router: Router) { }

    getCategories() {
        return this.http.get(`${this.endpoint}/Category`);
    }

    getCategoryById(id: number) {
        return this.http.get(`${this.endpoint}/Category/${id}`);
    }

    postCategory( category: Category) {
        return this.http.post(`${this.endpoint}/Category`, category, {responseType: 'text'});
    }

    deleteCategory(id: number ) {
        return this.http.delete(`${this.endpoint}/Category/${id}`, {responseType: 'text'});
    }



    getActivities() {
        return this.http.get(`${this.endpoint}/Actividad`);
    }

    getActivityById(id: number ) {
        return this.http.get(`${this.endpoint}/Actividad/byId/${id}`);
    }

    getActivityByDate(date: Date ) {
        return this.http.get(`${this.endpoint}/Actividad/${date}`);
    }

    getActivityByDateRange(startDate: Date, finishDate: Date ) {
        return this.http.get(`${this.endpoint}/Actividad/${startDate}/${finishDate}`);
    }

    postActivity( activity: Activity) {
        return this.http.post(`${this.endpoint}/Actividad`, activity, {responseType: 'text'});
    }

    updateActivity(id: number, activity: Activity) {
        return this.http.put(`${this.endpoint}/Actividad/${id}`, activity, {responseType: 'text'});
    }

}
