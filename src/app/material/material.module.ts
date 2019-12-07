import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule} from '@angular/material';



const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule
];

@NgModule({
  imports: [MaterialComponents, MatToolbarModule, MatIconModule, MatInputModule],
  exports: [MaterialComponents, MatToolbarModule, MatIconModule, MatInputModule]
})
export class MaterialModule { }
