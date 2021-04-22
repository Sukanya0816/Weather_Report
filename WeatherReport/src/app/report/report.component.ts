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
  curr=new Date()
  details=[]
  val=""
  constructor(private weather: WeatherService) { }
 
  ngOnInit(): void {
  }
  onSearch(){
    this.details=[]
    this.weather.getWeather(this.city).subscribe(data =>{this.weatherReport = data
      this.report =_.map(data.list, (record) => {
        return(
          {
            date: record.dt_txt,
            tempmin: record.main.temp_min,
            tempmax: record.main.temp_max,
            pressure: record.main.pressure,
            humidity: record.main.humidity
          })
        })
      let n=this.curr.getDate()
      for(let i= n;i<= n+4;i++){
        let tempmin=0
        let tempmax=0
        let c = 0 
      _.forEach(this.report, (x)=>{
        let str=new Date(x.date)
        if(i==str.getDate()){
          tempmin=tempmin+x.tempmin
          tempmax=tempmax+x.tempmax
          this.val=x
           c = c+1
          }
      })
        tempmin=tempmin/c
        tempmax=tempmax/c
      this.details.push({date: this.val['date'], tempmin:Math.ceil(tempmin), tempmax:Math.ceil(tempmax), pressure: this.val['pressure'], humidity: this.val['humidity']})
    }
     })
     console.log(this.details);
    }
  }
  

    

