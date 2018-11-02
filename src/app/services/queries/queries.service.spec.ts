import { TestBed, inject, async } from '@angular/core/testing';
import { QueriesService } from './queries.service';
import { ConnectionBackend, Http, Response } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AllData } from '../../../assets/interfaces/data';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Meta, Title } from '@angular/platform-browser';

describe('QueriesService', () => {

    let httpClientSpy: { get: jasmine.Spy };
    let heroService: QueriesService;
    let title: Title;
    let meta: Meta;

    beforeEach(() => {
        // TODO: spy on other methods too
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        heroService = new QueriesService(<any> httpClientSpy, title, meta);
    });

    beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, QueriesService
      ],
      providers: [QueriesService, ConnectionBackend]
    });

  });
});
