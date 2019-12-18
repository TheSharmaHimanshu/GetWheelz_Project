import { NgModule } from '@angular/core';
import { MatTooltipModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatDialogModule, MatIconModule, MatInputModule, MatDividerModule, MatSlideToggleModule, MatGridListModule, MatExpansionModule, MatCardModule, MatBottomSheetModule, MatListModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { AdvanceSearchComponent } from '../advance-search/advance-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';


const MaterialComponents = [
  MatTooltipModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatBottomSheetModule
];

@NgModule({
  declarations: [AdvanceSearchComponent, LoginComponent, RegisterComponent],
  imports: [MatTooltipModule, MaterialComponents, MatMenuModule, MatNativeDateModule, MatDatepickerModule, MatDialogModule, MatSelectModule, BrowserAnimationsModule, MatListModule, MatBottomSheetModule, MatToolbarModule, MatIconModule, MatInputModule, MatDividerModule, MatSlideToggleModule, MatGridListModule, MatExpansionModule, MatCardModule],
  exports: [MatTooltipModule, MaterialComponents, MatMenuModule, MatNativeDateModule, MatDatepickerModule, MatDialogModule, MatSelectModule, MatListModule, BrowserAnimationsModule, MatBottomSheetModule, MatToolbarModule, MatIconModule, MatInputModule, MatDividerModule, MatSlideToggleModule, MatGridListModule, MatExpansionModule, MatCardModule],
  entryComponents: [AdvanceSearchComponent, LoginComponent, RegisterComponent]
})
export class MaterialModule { }
