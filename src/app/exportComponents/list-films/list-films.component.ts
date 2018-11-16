import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SingleDataInArray } from '../../../assets/interfaces/data';
import { FunctionsService } from '../../services/functions/functions.service';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent {

    @Input() listFilms: SingleDataInArray[];
    @Output() indexOfCurrentMovie = new EventEmitter();
    @Output() popUpData = new EventEmitter();

    constructor(
        public functions: FunctionsService,
    ) { }

    /**
     * function get movie's data for popUp
     * @param item
     * @param index
     */
    public getPopUpData(index: number): void {
        this.indexOfCurrentMovie.emit(index);
        this.popUpData.emit(true);
    }
}
