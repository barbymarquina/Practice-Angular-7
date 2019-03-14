import { Injectable } from '@angular/core';
import { Producto } from './producto'

@Injectable({
  providedIn: 'root'
})
export class ListaDeProductosService {
  public productos:Array<Producto>=[{
    nombre: 'Canaima',
    precio: 2500,
    imagen: "http://blog.latinoamericasalvajeapp.com/wp-content/uploads/2016/07/angel-falls-750x410.jpg" 
  },{
    nombre: 'Margarita',
    precio: 1000,
    imagen: "http://www.infodestinations.com/hoteles_imagenes/fotos/destinos/margarita/hoteles_en_margarita.jpg"
  }]
  
  public productoNoEncontrado:Producto={
    nombre:"Producto no encontrado",
    precio:0,
    imagen: "https://i.ytimg.com/vi/76O52P_7Krw/maxresdefault.jpg"
  
  }
  constructor() { }
  public obtenerProducto(nombre:string): Producto {
    let producto= this.productos.find((producto) => producto.nombre.toLowerCase()==nombre.toLowerCase());
    if(!producto){
      producto= this.productoNoEncontrado;
    }
    return producto;
   }
}
