import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { AppComponent } from './app.component';
import { CreditCardComponent } from './credit-card/credit-card.component';

@NgModule({
  imports: [BrowserModule, FormsModule, TextMaskModule],
  declarations: [AppComponent, CreditCardComponent, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
