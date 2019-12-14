import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatDividerModule, MatSlideToggleModule, MatGridListModule, MatExpansionModule, MatCardModule, MatBottomSheetModule, MatListModule, MatSelectModule } from '@angular/material';
import { AdvanceSearchComponent } from '../advance-search/advance-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatBottomSheetModule
];

@NgModule({
  declarations: [AdvanceSearchComponent],
  imports: [MaterialComponents, MatSelectModule, BrowserAnimationsModule, MatListModule, MatBottomSheetModule, MatToolbarModule, MatIconModule, MatInputModule, MatDividerModule, MatSlideToggleModule, MatGridListModule, MatExpansionModule, MatCardModule],
  exports: [MaterialComponents, MatSelectModule, MatListModule, BrowserAnimationsModule, MatBottomSheetModule, MatToolbarModule, MatIconModule, MatInputModule, MatDividerModule, MatSlideToggleModule, MatGridListModule, MatExpansionModule, MatCardModule],
  entryComponents: [AdvanceSearchComponent]
})
export class MaterialModule { }
