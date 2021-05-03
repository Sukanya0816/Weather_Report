import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { WeatherDataComponent } from './weather-data/weather-data.component';
=======
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { WeatherReportComponent } from './report/report.component';
import { WeatherDataComponent } from './Components/weather-data/weather-data.component';
>>>>>>> 29e9b1ddb1c6259aa031d7921c71e0b5446dd012

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
=======
    WeatherReportComponent,
>>>>>>> 29e9b1ddb1c6259aa031d7921c71e0b5446dd012
    WeatherDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    TableModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
