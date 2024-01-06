import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/interfaces/weather-data';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

@Input() weatherDataInput!: WeatherData;

ngOnInit(): void {
  console.log('Dados do Pai', this.weatherDataInput);
}

}
