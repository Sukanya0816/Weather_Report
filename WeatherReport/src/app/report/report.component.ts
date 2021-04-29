import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import * as _ from 'lodash';
import * as moment from 'moment';
@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss']
})
export class WeatherReportComponent implements OnInit{
    weatherReport: any;
    city: any;
    report: any;
    values = [];
    constructor(private weather: WeatherService) {}
    ngOnInit(): void {}
    onSearch(){
        this.values=[]
        this.weather.getWeather(this.city).subscribe((data) => {
            this.weatherReport = data;
            this.report = _.groupBy(data.list, (date) =>
                moment(date.dt_txt).format('DD-MM-YYYY')
            );
            Object.values(this.report).forEach((val: any) => {
                let tempmin=0;
                let tempmax = 0;
                let pressure = 0;
                let humidity = 0;
                val.forEach((v) => {
                    (tempmin = tempmin + v.main.temp_min),
                        (tempmax = tempmax + v.main.temp_max),
                        (pressure = pressure + v.main.pressure),
                        (humidity = humidity + v.main.humidity);
                });
                this.values.push({
                    tempmin: Math.ceil(tempmin / val.length),
                    tempmax: Math.ceil(tempmax / val.length),
                    pressure: Math.ceil(pressure / val.length),
                    humidity: Math.ceil(humidity / val.length),
                    date: val[0].dt_txt
                });
            });
            this.values.splice(this.values.length - 1, 1);
        });
    }
}
