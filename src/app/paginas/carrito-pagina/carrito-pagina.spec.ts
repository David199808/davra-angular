import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarritoPagina } from './carrito-pagina';

describe('CarritoPagina', () => {
  let component: CarritoPagina;
  let fixture: ComponentFixture<CarritoPagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoPagina],
    }).compileComponents();

    fixture = TestBed.createComponent(CarritoPagina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
