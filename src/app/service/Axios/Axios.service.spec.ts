/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AxiosService } from './Axios.service';

describe('Service: Axios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AxiosService]
    });
  });

  it('should ...', inject([AxiosService], (service: AxiosService) => {
    expect(service).toBeTruthy();
  }));
});
