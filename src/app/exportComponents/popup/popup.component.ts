import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FunctionsService } from '../../services/functions/functions.service';
import { SingleDataInArray } from '../../../assets/interfaces/data';
import { BankService } from '../../services/bank/bank.service';
import { device } from '../../../assets/interfaces/device';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

    public deviceType: device;
    @Input() listFilmsLength: number;
    @Input() indexOfCurrentMovie: number;
    @Input() popUpData: SingleDataInArray;
    @Output() closeActivePopUp = new EventEmitter();
    @Output() newIndexOfCurrentMovie = new EventEmitter();

    constructor(
        public functions: FunctionsService,
        public bank: BankService
    ) {}

    ngOnInit() {
        this.deviceSubscribe();
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
        this.newIndexOfCurrentMovie.emit(this.indexOfCurrentMovie + 1);
    }

    /**
     * Function subscribe on device type function
     */
    public deviceSubscribe() {
        this.functions.deviceSubject.subscribe({
            next: (value: device) => { this.deviceType = value; },
        });
    }
}
