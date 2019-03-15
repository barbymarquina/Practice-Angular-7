import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http: HttpClient) { }
  public mascotaApi(): Observable<any> {
    return this.http.get('https://dog.ceo/api/breeds/image/random');
  }
}
