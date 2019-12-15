import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatDialogModule, MatIconModule, MatInputModule, MatDividerModule, MatSlideToggleModule, MatGridListModule, MatExpansionModule, MatCardModule, MatBottomSheetModule, MatListModule, MatSelectModule } from '@angular/material';
import { AdvanceSearchComponent } from '../advance-search/advance-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from '../login/login.component';


const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatBottomSheetModule
];

@NgModule({
  declarations: [AdvanceSearchComponent, LoginComponent],
  imports: [MatButtonModule,MaterialComponents, MatDialogModule, MatSelectModule, BrowserAnimationsModule, MatListModule, MatBottomSheetModule, MatToolbarModule, MatIconModule, MatInputModule, MatDividerModule, MatSlideToggleModule, MatGridListModule, MatExpansionModule, MatCardModule],
  exports: [MatButtonModule,MaterialComponents, MatDialogModule, MatSelectModule, MatListModule, BrowserAnimationsModule, MatBottomSheetModule, MatToolbarModule, MatIconModule, MatInputModule, MatDividerModule, MatSlideToggleModule, MatGridListModule, MatExpansionModule, MatCardModule],
  entryComponents: [AdvanceSearchComponent, LoginComponent]
})
export class MaterialModule { }
