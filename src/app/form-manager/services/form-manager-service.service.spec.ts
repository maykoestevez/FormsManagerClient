import { TestBed } from '@angular/core/testing';

import { FormManagerServiceService } from './form-manager-service.service';

describe('FormManagerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormManagerServiceService = TestBed.get(FormManagerServiceService);
    expect(service).toBeTruthy();
  });
});
