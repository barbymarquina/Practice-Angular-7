import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiTemperaturaService {

  constructor() { }

  public generarTemperatura():number {
    return Math.floor(Math.random()*(40)+10);
  }
}
