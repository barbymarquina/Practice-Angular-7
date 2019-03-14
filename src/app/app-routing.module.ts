import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {path:'page1', component:ContactoComponent},
  {path:'page2', component:QuienesComponent},
  {path:'producto/:idProducto', component:ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
