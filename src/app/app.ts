import { Component } from '@angular/core';
import { PRODUCTOS } from './datos/catalogo';
import { Talla } from './modelos/producto';
import { TarjetaProducto } from './tarjeta-producto/tarjeta-producto';
import { Encabezado } from './encabezado/encabezado';

@Component({
  imports: [TarjetaProducto, Encabezado],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  productos = PRODUCTOS;

  agregar(pedido: { id: number; talla: Talla }) {
    console.log('Agregaron:', pedido);
  }
}
