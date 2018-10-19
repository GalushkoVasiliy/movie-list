import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank/bank.service';
import { SingleDataInArray } from '../../assets/interfaces/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    limit: number = 20;
    currentPage: number = 1;
    numberOfPages: number;
    popUpData: SingleDataInArray;
    indexOfCurrentMovie: number;
    mobWindow: boolean = false;

    constructor(
        public bank: BankService,
    ) { }

    ngOnInit() {
        this.bank.getData(this.currentPage);
        this.numberOfPages = this.bank.numberOfPages;
        document.documentElement.clientWidth < 1200 ? this.mobWindow = true : this.mobWindow = false;
        window.addEventListener('resize', () => {
            document.documentElement.clientWidth < 1200 ? this.mobWindow = true : this.mobWindow = false;
        });
    }

    /**
     * select active pagination button on click
     * @param event
     */
    public selectPaginationItem(event): void {
        this.currentPage = event.page;
        this.selectPage(event.page);
    }

    /**
     * Pagination buttons [first, last, prev, next] click function
     * @param numberPage
     */
    public clickCustomButtons(numberPage: number): void {
        this.currentPage = numberPage;
        this.selectPage(numberPage);
    }

    /**
     * Function call data for current page
     * @param numberPage
     */
    public selectPage(numberPage: number): void {
        this.bank.getData(numberPage);
    }

    /**
     * function get movie's data for popUp
     * @param item
     * @param index
     */
    public getPopUpData(item: SingleDataInArray, index: number): void {
        this.indexOfCurrentMovie = index;
        this.popUpData = item;
        document.body.style.overflow = 'hidden';
        document.getElementById('popUp').style.display = 'block';
    }

    /**
     * function close popUp
     */
    public closePopUp(): void {
        document.body.style.overflow = 'visible';
        document.getElementById('popUp').style.display = 'none';
    }

    /**
     * function get next movie (indexOf current movie + 1)
     */
    public nextMovie(): void {
        this.indexOfCurrentMovie = this.indexOfCurrentMovie + 1;
        this.popUpData = this.bank.data[this.indexOfCurrentMovie];
    }
}
