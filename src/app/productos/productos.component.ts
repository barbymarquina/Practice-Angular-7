import { Component, OnInit } from "@angular/core";
import { Producto } from "../producto";
import { ListaDeProductosService } from "../lista-de-productos.service";

@Component({
  selector: "app-productos",
  templateUrl: "./productos.component.html",
  styleUrls: ["./productos.component.scss"]
})
export class ProductosComponent implements OnInit {
  public productos: Array<Producto>;

  constructor(private productoServicio: ListaDeProductosService) {
    /*  this.productos=this.productoServicio.ListaProducto(); */
    this.productos=[];
    this.productoServicio.listaProductosApi().subscribe({
      next:(producto: Producto) =>{
        this.productos.push(producto);
      }
    });
  }

  ngOnInit() {}
}
