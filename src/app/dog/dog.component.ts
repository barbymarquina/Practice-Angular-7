import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../mascota.service';


@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {
public imagenPerro: string;
  constructor(private mascota: MascotaService) { 
    this.mascota.mascotaApi().subscribe({
      next: (value) => { 
        this.imagenPerro = value.message;
      }
    });
  }

  ngOnInit() {
  }

}
