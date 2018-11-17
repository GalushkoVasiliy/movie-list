import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilmsComponent } from './list-films.component';
import { SingleDataInArray } from '../../../assets/interfaces/data';

describe('ListFilmsComponent', () => {
  let component: ListFilmsComponent;
  let fixture: ComponentFixture<ListFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be films data', () => {
      component.listFilms = [] as SingleDataInArray[];
      fixture.detectChanges();
      expect(component.listFilms).toEqual([]);
  });
});
