import { Component, input, output } from '@angular/core';
import { Producto, Talla } from '../modelos/producto';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-tarjeta-producto',
  styleUrl: './tarjeta-producto.css',
  templateUrl: './tarjeta-producto.html',
})
export class TarjetaProducto {
  producto = input.required<Producto>();
  pedir = output<{ id: number; talla: Talla }>();

  avisar(talla: string) {
    this.pedir.emit({ id: this.producto().id, talla: talla as Talla });
  }
}
