import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SingleDataInArray } from '../../../assets/interfaces/data';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

    public filter = new Subject();
    @Input() listFilms: SingleDataInArray[];
    @Output() filterListFilms = new EventEmitter;

    public filterFunction(value) {
        function sortFilmsListArrayByPopularity(a: SingleDataInArray, b: SingleDataInArray) {
            return a.popularity > b.popularity ? 1 : -1;
        }

        function sortFilmsListArrayByVote(a: SingleDataInArray, b: SingleDataInArray) {
            return a.vote_average > b.vote_average ? 1 : -1;
        }

        function sortFilmsListArrayByReleaseData(a: SingleDataInArray, b: SingleDataInArray) {
            return Date.parse(a.release_date) > (Date.parse(b.release_date)) ? -1 : 1;
        }

        switch (value) {
            case 1:
                this.listFilms.sort(sortFilmsListArrayByPopularity);
                this.filterListFilms.emit(this.listFilms);
                break;
            case 2:
                this.listFilms.sort(sortFilmsListArrayByVote);
                this.filterListFilms.emit(this.listFilms);
                break;
            case 3:
                this.listFilms.sort(sortFilmsListArrayByReleaseData);
                this.filterListFilms.emit(this.listFilms);
                break;
        }
    }
}
