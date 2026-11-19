import { computed, Service, signal } from '@angular/core';
import { Talla } from '../modelos/producto';

export type Pedido = { id: number; talla: Talla };

@Service()
export class Carrito {
  items = signal<Pedido[]>([]);
  cantidad = computed(() => this.items().length);

  agregar(pedido: Pedido) {
    this.items.update((anterior) => [...anterior, pedido]);
  }
}
