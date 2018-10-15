import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Meta, Title } from '@angular/platform-browser';
import {map} from 'rxjs/operators';
import {AllData} from '../../../assets/interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class QueriesService {

  constructor(
      private http: Http,
      private titleService: Title,
      private meta: Meta,
  ) { }

  /**
   * data return
   */
  public getDataMovies(pageNumber) {
      return this.http
          .get('http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page=' + pageNumber)
          .pipe(
              map((res: Response) => res.json() as AllData)
          );
  }

  /**
   * Подставление полученного значения в title
   * @param {string} paramTitle
   */
  setTitle(paramTitle: string) {
      return this.titleService.setTitle(paramTitle);
  }

  /**
   * Подставление полученного значения в description
   * @param {string} paramDescription
   * @returns {HTMLMetaElement | null}
   */
  setDescription(paramDescription: string) {
      return this.meta.addTag({ name: 'description', content: paramDescription});
  }
}
