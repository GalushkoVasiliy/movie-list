import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank/bank.service';
import { SingleDataInArray } from '../../assets/interfaces/data';
import {FunctionsService} from '../services/functions/functions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    currentPage = 1;
    numberOfPages: number;
    popUpData: SingleDataInArray;
    indexOfCurrentMovie: number;
    activePopUp = false;

    public set popUp(event: SingleDataInArray) {
        this.popUpData = event;
        this.activePopUp = true;
    }
    public set index(event: number) {
        this.indexOfCurrentMovie = event;
    }
    public get closePopUp() {
        return this.activePopUp;
    }
    public set closePopUp(event: boolean) {
        this.activePopUp = event;
    }

    constructor(
        public bank: BankService,
        public functions: FunctionsService
    ) { }

    ngOnInit() {
        this.bank.getData(this.currentPage);
        this.numberOfPages = this.bank.numberOfPages;
    }
}
