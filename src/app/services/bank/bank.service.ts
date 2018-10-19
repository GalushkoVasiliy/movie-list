import { Injectable } from '@angular/core';
import {QueriesService} from '../queries/queries.service';
import {AllData, MetaInterface, SingleDataInArray} from '../../../assets/interfaces/data';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Injectable({
  providedIn: 'root'
})
export class BankService {

    allData;
    numberOfPages: number;
    numberOfPosts: number;
    isReady: boolean = false;
    data: SingleDataInArray[];

    title: MetaInterface = {
        title: 'home page',
        description: 'view all movies page',
        navigate: '/home'
    };

    constructor(
        public queries: QueriesService,
    ) {
        this.allData = new Map();
    }

    /**
     * content availability check
     * @param pageNumber
     */
    public getData(pageNumber) {
        this.allData.has(pageNumber) ? this.data = this.allData.get(pageNumber) : this.dataRequest(pageNumber);
        this.isReady = true;
    }

    /**
     * function test data_language
     * @param pageNumber
     */
    public dataRequest(pageNumber) {
        this.queries.setTitle(this.title.title + 'page №' + pageNumber);
        this.queries.setDescription(this.title.description);
        this.queries
            .getDataMovies(pageNumber)
                .subscribe(
                    (data: AllData)  => {
                        this.allData.set(data.page, data.results);
                        this.data = data.results;
                        if (this.numberOfPages === undefined) {
                            this.numberOfPages = data.total_pages;
                            this.numberOfPosts = data.total_results;
                        }
                    }
                );
    }
}
