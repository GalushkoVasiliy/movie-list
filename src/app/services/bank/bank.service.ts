import { EventEmitter, Injectable } from '@angular/core';
import { QueriesService } from '../queries/queries.service';
import { AllData, MetaInterface, SingleDataInArray } from '../../../assets/interfaces/data';
import { from, Observable, Subject } from 'rxjs';
import {postPagesCount} from '../../../assets/interfaces/PostsPages';

@Injectable({
  providedIn: 'root'
})
export class BankService {

    public isReady = false;
    public currentPage = 1;
    public allData = new Map();
    public statisticOfAllData: Subject<postPagesCount> = new Subject<postPagesCount>();
    public pageListFilms: Subject<SingleDataInArray[]> = new Subject<SingleDataInArray[]>();

    constructor(
        public queries: QueriesService,
    ) {
        this.getData(this.currentPage);
    }

    /**
     * content availability check
     * @param pageNumber
     */
    public getData(pageNumber) {
        this.allData.has(pageNumber) ? this.pageListFilms.next(this.allData.get(pageNumber)) : this.dataRequest(pageNumber);
        this.queries.setTitle(`home page №${pageNumber}`);
        this.queries.setDescription(`view all movies page №${pageNumber}`);
        this.isReady = true;
    }

    /**
     * Function get request data from query service
     * @param pageNumber {number}
     */
    public dataRequest(pageNumber) {
        this.queries.getDataMovies(pageNumber)
                .subscribe(
                    data  => {
                        const value: AllData = { ... data.body };
                        this.allData.set(value.page, value.results);
                        this.pageListFilms.next(value.results);
                        this.statisticOfAllData.next({
                            pages: value.total_pages,
                            posts: value.total_results
                        });
                    },
                    error => console.log(error)
                );
    }
}
