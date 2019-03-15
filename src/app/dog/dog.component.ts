import { Component, OnInit } from '@angular/core';
import { ListaDeProductosService } from '../lista-de-productos.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {
public imagenPerro: string;
  constructor(private productoServicio: ListaDeProductosService) { 
    this.productoServicio.mascotaApi().subscribe({
      next: (value) => { 
        this.imagenPerro = value.message;
      }
    });
  }

  ngOnInit() {
  }

}
