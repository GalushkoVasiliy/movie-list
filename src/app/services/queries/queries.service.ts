import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Meta, Title } from '@angular/platform-browser';
import { catchError, map, retry } from 'rxjs/operators';
import { AllData } from '../../../assets/interfaces/data';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueriesService {

    public url = 'http://api.themoviedb.org/3/';
    public apiKey = 'ebea8cfca72fdff8d2624ad7bbf78e4c';
    public config = `${this.url}movie/now_playing?api_key=${this.apiKey}&language=en-US&page=`;

    constructor(
        private http: HttpClient,
        private titleService: Title,
        private meta: Meta,
    ) { }

    /**
     * Return data films
     * @param pageNumber
     */
    public getDataMovies(pageNumber): Observable<HttpResponse<AllData>> {
        return this.http.get<AllData>(this.config + pageNumber, { observe: 'response'})
            .pipe(
                retry(3),
                catchError(this.handleError)
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

    /**
     * handleError function
     * @param error
     */
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError(
            'Something bad happened; please try again later.');
    }
}
