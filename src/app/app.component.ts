import { Component } from '@angular/core';
import { Ciudad } from './ciudad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto-ciudades';
  public cities: Array<Ciudad>=[];

  public addCity(name:string): void{
    this.cities.push({
      name:name,
      temperatura:{
        valor: 20,
        tipo: "°C"
      }
    });
    console.log(this.cities);
  }
}
