import { Component, OnInit } from '@angular/core';
import {BankService} from '../services/bank/bank.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  defaultPageNumber: number = 1;

  constructor(
      public bank: BankService,
  ) { }

  ngOnInit() {
      this.bank.getData(this.defaultPageNumber);
  }
  public selectPage(numberPage) {
      this.bank.getData(numberPage);
  }

}
