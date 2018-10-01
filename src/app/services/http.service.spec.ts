import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';

describe('GenerationService', () => {
    let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService],
      imports: [
        HttpModule
      ]
    });
    httpService = TestBed.get(HttpService);
  });

});