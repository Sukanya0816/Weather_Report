import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class WeatherReportComponent implements OnInit {
  weatherReport:any
  report:any
  topReports:any
  city:any
  constructor(private weather: WeatherService) { }
 
  ngOnInit(): void {
  }
  
  onSearch(){
    this.weather.getWeather(this.city).subscribe(data =>{this.weatherReport = data
    this.report = data.list
    this.topReports = this.report.slice(0, 5);
  })
}
    
}
