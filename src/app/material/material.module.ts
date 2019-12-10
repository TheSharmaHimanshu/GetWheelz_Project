import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatDividerModule, MatSlideToggleModule, MatGridListModule, MatExpansionModule } from '@angular/material';
import { IgxToggleModule, IgxButtonModule } from 'igniteui-angular'



const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule
];

@NgModule({
  imports: [MaterialComponents, MatToolbarModule, MatIconModule, MatInputModule, MatDividerModule, MatSlideToggleModule, MatGridListModule, MatExpansionModule, IgxToggleModule, IgxButtonModule],
  exports: [MaterialComponents, MatToolbarModule, MatIconModule, MatInputModule, MatDividerModule, MatSlideToggleModule, MatGridListModule, MatExpansionModule, IgxToggleModule, IgxButtonModule]
})
export class MaterialModule { }
