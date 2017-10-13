import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RowComponent } from './row/row.component';

import { ComponentServices } from './shared/component.service'
import { AccordionModule } from "ng2-accordion";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RowComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule
  ],
  providers: [ComponentServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
