import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private http: HttpClient) { }
  title = 'back';
  configUrl = '/api/WeatherForecast';

  tomek = this.getHeroes().subscribe();
  getHeroes() {
    return this.http.get<string>(this.configUrl);
  }
}
