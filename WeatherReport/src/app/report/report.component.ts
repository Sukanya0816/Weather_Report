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
  report=[]
  city:any
  date:any
  constructor(private weather: WeatherService) { }
 
  ngOnInit(): void {
  }
  onSearch(){
    this.weather.getWeather(this.city).subscribe(data =>{this.weatherReport = data
     _.forEach(data.list, (x)=> {
      let secondDate=new Date(x.dt_txt)
      if(secondDate.getHours()==21){
        this.report.push({
          date: x.dt_txt,
          tempmin: x.main.temp_min,
          tempmax: x.main.temp_max,
          pressure: x.main.pressure,
          humidity: x.main.humidity,
      })
    }
    })
  })
  }
}
    

