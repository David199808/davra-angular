import { Component, computed, inject } from '@angular/core';
import { Carrito } from '../../servicios/carrito';
import { PRODUCTOS } from '../../datos/catalogo';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-carrito-pagina',
  styleUrl: './carrito-pagina.css',
  templateUrl: './carrito-pagina.html',
})
export class CarritoPagina {
  productos = PRODUCTOS;
  carrito = inject(Carrito);
  total = computed(() =>
    this.carrito.items().reduce((suma, prenda) => {
      const precio = this.buscar(prenda.id)?.precio ?? 0;
      return suma + precio * prenda.cantidad;
    }, 0),
  );

  buscar(id: number) {
    return this.productos.find((p) => p.id === id);
  }
}
