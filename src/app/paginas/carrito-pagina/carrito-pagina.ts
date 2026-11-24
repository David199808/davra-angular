import { Component, inject } from '@angular/core';
import { Carrito } from '../../servicios/carrito';

@Component({
  imports: [],
  selector: 'app-carrito-pagina',
  styleUrl: './carrito-pagina.css',
  templateUrl: './carrito-pagina.html',
})
export class CarritoPagina {
  carrito = inject(Carrito);
}
