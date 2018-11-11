import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SingleDataInArray } from '../../../assets/interfaces/data';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent {

    @Input() list: SingleDataInArray[];
    @Output() indexOfCurrentMovie = new EventEmitter();
    @Output() popUpData = new EventEmitter();

    constructor() { }

    /**
     * function get movie's data for popUp
     * @param item
     * @param index
     */
    public getPopUpData(item: SingleDataInArray, index: number): void {
        this.indexOfCurrentMovie.emit(index);
        this.popUpData.emit(item);
    }
}
