import { TestBed } from '@angular/core/testing';

import { ApiTemperaturaService } from './api-temperatura.service';

describe('ApiTemperaturaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiTemperaturaService = TestBed.get(ApiTemperaturaService);
    expect(service).toBeTruthy();
  });
});
