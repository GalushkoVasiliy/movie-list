import { TestBed, inject } from '@angular/core/testing';
import { BankService } from './bank.service';
import { QueriesService } from '../queries/queries.service';
import { Http, Response } from '@angular/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('BankService', () => {
  // let service: BankService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankService, Http],
        imports: [HttpClientTestingModule],
    });
  });
});
