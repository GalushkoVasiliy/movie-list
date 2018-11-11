import {Component, Input} from '@angular/core';
import { BankService } from '../../services/bank/bank.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

    public limit = 20;
    @Input() currentPage: number;
    @Input() numberOfPages: number;
    @Input() numberOfPosts: number;

    constructor(
        public bank: BankService
    ) { }

    /**
     * select active pagination button on click
     * @param event
     */
    public selectPaginationItem(event): void {
        this.currentPage = event.page;
        this.selectPage(event.page);
    }

    /**
     * Function call data for current page
     * @param numberPage
     */
    public selectPage(numberPage: number): void {
        this.bank.getData(numberPage);
    }

    /**
     * Pagination buttons [first, last, prev, next] click function
     * @param numberPage
     */
    public clickCustomButtons(numberPage: number): void {
        this.currentPage = numberPage;
        this.selectPage(numberPage);
    }

}
