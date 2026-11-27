import { TestBed } from '@angular/core/testing';
import { TiendaApi } from './tienda-api';

describe('TiendaApi', () => {
  let service: TiendaApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiendaApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
