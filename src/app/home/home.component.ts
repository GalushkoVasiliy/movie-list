import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank/bank.service';
import { SingleDataInArray } from '../../assets/interfaces/data';
import { FunctionsService } from '../services/functions/functions.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public popUp = false;
    public numberOfPages: number;
    public numberOfPosts: number;
    public indexCurrentMovie: number;
    public popUpData: SingleDataInArray;
    public listFilmsData: SingleDataInArray[];
    public indexOfCurrentMovie = new Subject<number>();

    set newIndexCurrentMovie(event) {
        this.indexOfCurrentMovie.next(event);
    }
    set filter(event) {
        this.listFilmsData = event;
    }

    constructor(
        public bank: BankService,
        public functions: FunctionsService
    ) { }

    ngOnInit() {
        this.pageListSubscribe();
        this.numberOfPagesSubscribe();
        this.indexCurrentMovieSubscribe();
    }

    /**
     * Function subscribe on current page list array[]
     */
    public pageListSubscribe() {
        this.bank.pageListFilms.subscribe({ next: value => { this.listFilmsData = value; }});
    }

    /**
     * Function subscribe on statistic about how many films and pages
     */
    public numberOfPagesSubscribe() {
        this.bank.statisticOfAllData.subscribe({
            next: value => {
                this.numberOfPages = value.pages;
                this.numberOfPosts = value.posts;
            },
            complete: () => this.bank.statisticOfAllData.unsubscribe()
        });
    }

    /**
     * Function subscribe on current index of movie for popUp
     */
    public indexCurrentMovieSubscribe() {
        this.indexOfCurrentMovie.subscribe({
                next: value => {
                    this.popUpData = this.listFilmsData[value];
                    this.indexCurrentMovie = value;
                },
                complete: () => this.popUp = true
        });
    }
}
