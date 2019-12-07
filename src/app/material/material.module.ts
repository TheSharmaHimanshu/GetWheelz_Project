import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatDividerModule, MatSlideToggleModule } from '@angular/material';



const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule
];

@NgModule({
  imports: [MaterialComponents, MatToolbarModule, MatIconModule, MatInputModule, MatDividerModule, MatSlideToggleModule],
  exports: [MaterialComponents, MatToolbarModule, MatIconModule, MatInputModule, MatDividerModule, MatSlideToggleModule]
})
export class MaterialModule { }
