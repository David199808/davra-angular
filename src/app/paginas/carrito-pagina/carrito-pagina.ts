import { Component, computed, inject } from '@angular/core';
import { Carrito } from '../../servicios/carrito';
import { CurrencyPipe } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { TiendaApi } from '../../servicios/tienda-api';

@Component({
  imports: [CurrencyPipe, ReactiveFormsModule],
  selector: 'app-carrito-pagina',
  styleUrl: './carrito-pagina.css',
  templateUrl: './carrito-pagina.html',
})
export class CarritoPagina {
  api = inject(TiendaApi);
  carrito = inject(Carrito);
  total = computed(() =>
    this.carrito.items().reduce((suma, prenda) => {
      const precio = this.buscar(prenda.id)?.precio ?? 0;
      return suma + precio * prenda.cantidad;
    }, 0),
  );

  buscar(id: number) {
    return this.api.productos().find((p) => p.id === id);
  }

  envio = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    ciudad: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    celular: new FormControl('', [Validators.required, Validators.pattern(/^3\d{9}$/)]),
  });
}
