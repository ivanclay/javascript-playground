import { Component, Input } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherData } from 'src/app/models/interfaces/weather-data';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
@Input() weatherDataInput!: WeatherData;

minTemperatureIcon = faTemperatureLow;
maxTemperatureIcon = faTemperatureHigh;
humidityIcon = faDroplet;
windIcon = faWind;


}
