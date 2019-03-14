import { Component } from '@angular/core';
import { Ciudad } from './ciudad';
import { ApiTemperaturaService } from './api-temperatura.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto-ciudades';
  public cities: Array<Ciudad>=[];

constructor(private apiTemp:ApiTemperaturaService){

}
  public addCity(name:string): void{
    this.cities.push({
      name:name,
      temperatura:{
        valor: this.apiTemp.generarTemperatura(),
        tipo: "°C"
      }
    });
    console.log(this.cities);
  }
}
