import { Component, inject } from '@angular/core';
import { Carrito } from '../servicios/carrito';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-encabezado',
  styleUrl: './encabezado.css',
  templateUrl: './encabezado.html',
})
export class Encabezado {
  carrito = inject(Carrito);
}
