import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FunctionsService } from '../../services/functions/functions.service';
import { SingleDataInArray } from '../../../assets/interfaces/data';
import { BankService } from '../../services/bank/bank.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

    @Input() popUpData;
    @Input() indexOfCurrentMovie;
    @Output() closeActivePopUp = new EventEmitter();

    constructor(
        public functions: FunctionsService,
        public bank: BankService
    ) {}

    ngOnInit() {
        document.body.style.overflow = 'hidden';
        document.getElementById('popUp').style.display = 'block';
    }

    /**
     * function close popUp
     */
    public closePopUp(): void {
        document.body.style.overflow = 'visible';
        document.getElementById('popUp').style.display = 'none';
        this.closeActivePopUp.emit(false);
    }

    /**
     * function get next movie (indexOf current movie + 1)
     */
    public nextMovie(): void {
        this.indexOfCurrentMovie = this.indexOfCurrentMovie + 1;
        this.popUpData = this.bank.data[this.indexOfCurrentMovie];
    }
}
