import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {ToDoAppComponent} from './app.component';

@NgModule({
  declarations: [
    ToDoAppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [ToDoAppComponent]
})
export class AppModule { }
