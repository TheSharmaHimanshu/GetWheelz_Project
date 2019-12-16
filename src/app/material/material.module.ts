import { NgModule } from '@angular/core';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatDialogModule, MatIconModule, MatInputModule, MatDividerModule, MatSlideToggleModule, MatGridListModule, MatExpansionModule, MatCardModule, MatBottomSheetModule, MatListModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { AdvanceSearchComponent } from '../advance-search/advance-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';


const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatBottomSheetModule
];

@NgModule({
  declarations: [AdvanceSearchComponent, LoginComponent, RegisterComponent],
  imports: [MaterialComponents, MatMenuModule, MatNativeDateModule, MatDatepickerModule, MatDialogModule, MatSelectModule, BrowserAnimationsModule, MatListModule, MatBottomSheetModule, MatToolbarModule, MatIconModule, MatInputModule, MatDividerModule, MatSlideToggleModule, MatGridListModule, MatExpansionModule, MatCardModule],
  exports: [MaterialComponents, MatMenuModule, MatNativeDateModule, MatDatepickerModule, MatDialogModule, MatSelectModule, MatListModule, BrowserAnimationsModule, MatBottomSheetModule, MatToolbarModule, MatIconModule, MatInputModule, MatDividerModule, MatSlideToggleModule, MatGridListModule, MatExpansionModule, MatCardModule],
  entryComponents: [AdvanceSearchComponent, LoginComponent, RegisterComponent]
})
export class MaterialModule { }
