import { Component, inject } from '@angular/core';
import { PRODUCTOS } from '../../datos/catalogo';
import { Carrito } from '../../servicios/carrito';
import { Pedido } from '../../modelos/pedido';
import { TarjetaProducto } from '../../tarjeta-producto/tarjeta-producto';
import { toSignal } from '@angular/core/rxjs-interop';
import { TiendaApi } from '../../servicios/tienda-api';

@Component({
  imports: [TarjetaProducto],
  selector: 'app-hombre',
  styleUrl: './hombre.css',
  templateUrl: './hombre.html',
})
export class Hombre {
  api = inject(TiendaApi);
  camisas = toSignal(this.api.obtenerCamisas(), { initialValue: [] });
  carrito = inject(Carrito);
  productos = toSignal(this.api.obtenerCamisas(), { initialValue: [] });

  agregar(pedido: Omit<Pedido, 'cantidad'>) {
    this.carrito.agregar(pedido);
    console.log(this.carrito.items());
  }
}
