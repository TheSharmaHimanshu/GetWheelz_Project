import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CategoriesComponent } from './categories/categories.component';
import{CarDetailsComponent} from './car-details/car-details.component';


const routes: Routes = [
  { path: 'search-results', component: SearchResultsComponent },
  { path: '', component: CategoriesComponent },
  { path: 'car-details', component:CarDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [SearchResultsComponent, CategoriesComponent,CarDetailsComponent];