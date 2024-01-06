import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
private apiKey = environment.WEATHER_API_KEY;
private apiPathUrl = environment.WEATHER_API_URL;
private apiResponseUnits = environment.WEATHER_API_UNITS;
private apiResponseMode = environment.WEATHER_API_MODE;

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<any>{
    let url = `${this.apiPathUrl}${cityName}&units=${this.apiResponseUnits}&mode=${this.apiResponseMode}&APPID=${this.apiKey}`;
    console.log(url);
    return this.http.get(url, {});
  }
}
