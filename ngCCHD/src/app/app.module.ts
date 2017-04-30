import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CchdComponent } from './cchd/cchd.component';

import {CchdDataService} from './cchd/cchd-data.service';
import {CchdAlgorithmService} from './cchd/cchd-algorithm.service';

@NgModule({
  declarations: [
    AppComponent,
    CchdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      CchdAlgorithmService,
      CchdDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
