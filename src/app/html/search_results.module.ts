import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchResults } from './search_results.component';

@NgModule({
  imports: [],
   exports: [SearchResults],
   declarations: [SearchResults],
   providers: [],
})
export class SearchResultsModule { }
