import { Injectable } from '@angular/core';
import {QueriesService} from '../queries/queries.service';
import {AllData, SingleDataInArray} from '../../../assets/interfaces/data';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  isReady: boolean = false;
  allData;
  data: SingleDataInArray[];
  numberOfPages: number;
  pagesArray: number[] = [];
  title = {
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
   * Trigger data
   * @param pageNumber
   */
  public getData(pageNumber) {
      this.allData.has(pageNumber) ? this.data = this.allData.get(pageNumber) : this.dataRequest(pageNumber);
      this.isReady = true;
  }
  /**
   * function test data_language
   */
  public dataRequest(pageNumber) {
      this.queries.setTitle(this.title.title + 'page №' + pageNumber);
      this.queries.setDescription(this.title.description);
      this.queries.getDataMovies(pageNumber)
          .subscribe(
              (data: AllData)  => {
                this.allData.set(data.page, data.results);
                this.data = data.results;
                this.numberOfPages !== undefined ? this.numberOfPages = data.total_results : this.doPagesArray(data.total_pages);
              }
          );
  }

  public doPagesArray(numberOfPages) {
    for (let i = 1; i < (numberOfPages + 1); i++ ) {
      this.pagesArray.push(i);
    }
  }
}
