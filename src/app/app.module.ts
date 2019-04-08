import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { ConvComponent } from './conv/conv.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { NewsService } from './news.service';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
 
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ConvComponent,
     routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
