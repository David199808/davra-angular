import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Hombre } from './paginas/hombre/hombre';
import { Mujer } from './paginas/mujer/mujer';
import { CarritoPagina } from './paginas/carrito-pagina/carrito-pagina';
import { NoEncontrada } from './paginas/no-encontrada/no-encontrada';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'hombre', component: Hombre },
  { path: 'mujer', component: Mujer },
  { path: 'carrito', component: CarritoPagina },
  { path: '**', component: NoEncontrada },
];
