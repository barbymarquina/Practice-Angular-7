import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ActivatedRoute } from '@angular/router';
import { ListaDeProductosService } from '../lista-de-productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  
public miProducto:Producto;

  constructor(private route:ActivatedRoute, private listaProducto:ListaDeProductosService) {
    const nombreDeProducto= this.route.snapshot.paramMap.get('idProducto');
    this.miProducto= this.listaProducto.obtenerProducto(nombreDeProducto);
   }

  ngOnInit() {} 
}
