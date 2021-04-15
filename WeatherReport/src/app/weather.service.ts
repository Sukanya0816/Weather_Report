import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

 getWeather(city): Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',india&mode=json&appid=aa67372f11e8f2c8b0a35008e5d793a4')
    }
  }
