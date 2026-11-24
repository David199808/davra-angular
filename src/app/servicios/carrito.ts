import { computed, Service, signal } from '@angular/core';
import { Pedido } from '../modelos/pedido';

@Service()
export class Carrito {
  // La caja: lista de pedidos, empieza vacía
  items = signal<Pedido[]>([]);
  // El contador: suma las cantidades
  cantidad = computed(() => this.items().reduce((suma, p) => suma + p.cantidad, 0));

  //Agregar sin repetir
  agregar(pedido: Omit<Pedido, 'cantidad'>) {
    //Buscar si ya existe la misma prenda en la misma talla
    const existe = this.items().find((p) => p.id === pedido.id && p.talla === pedido.talla);
    if (existe) {
      //Si existe: sumarle 1 y avisarle al signal
      existe.cantidad += 1;
      this.items.set([...this.items()]);
    } else {
      //Si no existe: agregarlo con cantidad 1
      this.items.update((anterior) => [...anterior, { ...pedido, cantidad: 1 }]);
    }
  }
}
