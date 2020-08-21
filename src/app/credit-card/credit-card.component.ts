import { Component, OnInit } from '@angular/core';
import * as cardValidator from 'card-validator';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  public type:any | 'any';
  public cardnumber:any;
  public cardnum:any = '';
  public mask = {
    mask: [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ',
           /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ',
           /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ',
           /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]
  }
  constructor() { }

  ngOnInit() {
  }


  updateCard() {
    this.cardnumber = this.cardnum.split(/[\_\s]+/ig).join('');
    this.type = cardValidator.number(this.cardnumber);
  }

}