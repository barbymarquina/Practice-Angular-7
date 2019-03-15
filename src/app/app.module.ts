import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';
import { EncomillarPipe } from './encomillar.pipe';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductosComponent } from './productos/productos.component';
import { HttpClientModule }    from '@angular/common/http';
import { DogComponent } from './dog/dog.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CityComponent,
    EncomillarPipe,
    ContactoComponent,
    QuienesComponent,
    ProductoComponent,
    ProductosComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
