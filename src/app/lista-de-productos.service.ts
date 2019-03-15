import { Injectable } from "@angular/core";
import { Producto } from "./producto";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class ListaDeProductosService {
  private productos: Array<Producto> = [
    {
      nombre: "Canaima",
      precio: 2500,
      imagen:
        "http://blog.latinoamericasalvajeapp.com/wp-content/uploads/2016/07/angel-falls-750x410.jpg"
    },
    {
      nombre: "Margarita",
      precio: 1000,
      imagen:
        "http://www.infodestinations.com/hoteles_imagenes/fotos/destinos/margarita/hoteles_en_margarita.jpg"
    },
    {
      nombre: "Caracas",
      precio: 1000,
      imagen: "https://media.jtdwjcwq6f4wp4ce.com/ux/caracas.jpg"
    },
    {
      nombre: "Morrocoy",
      precio: 1300,
      imagen:
        "http://www.periodistadigital.com/imagenes/2018/07/12/parque-nacional-morrocoy_560x280.jpg"
    }
  ];

  private productoNoEncontrado: Producto = {
    nombre: "Producto no encontrado",
    precio: 0,
    imagen: "https://i.ytimg.com/vi/76O52P_7Krw/maxresdefault.jpg"
  };
  constructor(private http: HttpClient) {}
  public obtenerProducto(nombre: string): Producto {
    let producto = this.productos.find(
      producto => producto.nombre.toLowerCase() == nombre.toLowerCase()
    );
    if (!producto) {
      producto = this.productoNoEncontrado;
    }
    return producto;
  }
  public ListaProducto(): Array<Producto> {
    return this.productos;
  }

  public mascotaApi(): Observable<any> {
    return this.http.get('https://dog.ceo/api/breeds/image/random');
  }

  public listaProductosApi(): Observable<Producto> {
    return new Observable((observer) => {
     let index= 0;
     setInterval(()=>{
       if(this.productos[index]){
       observer.next(this.productos[index]);
       index++;
       }else{
         observer.complete();
       }
     }, 1000);
      return {
        unsubscribe() {}
    };
    });
  }
}
