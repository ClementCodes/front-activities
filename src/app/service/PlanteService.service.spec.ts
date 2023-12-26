/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlanteServiceService } from './PlanteService.service';

describe('Service: PlanteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanteServiceService]
    });
  });

  it('should ...', inject([PlanteServiceService], (service: PlanteServiceService) => {
    expect(service).toBeTruthy();
  }));
});
