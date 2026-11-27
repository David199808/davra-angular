import { computed, Service, signal } from '@angular/core';
import { Pedido } from '../modelos/pedido';
import { Talla } from '../modelos/producto';

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

  quitar(id: number, talla: Talla) {
    this.items.update((anterior) => anterior.filter((p) => !(p.id === id && p.talla === talla)));
  }

  restar(id: number, talla: Talla) {
    const existe = this.items().find((p) => p.id === id && p.talla === talla);

    if (!existe) return;
    if (existe.cantidad > 1) {
      existe.cantidad -= 1;
      this.items.set([...this.items()]);
    } else {
      this.quitar(id, talla);
    }
  }
}
