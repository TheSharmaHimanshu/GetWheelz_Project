import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CategoriesComponent } from './categories/categories.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { ShowCategoryComponent } from './show-category/show-category.component';



const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'car-details', component: CarDetailsComponent },
  { path: 'show-category', component: ShowCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [SearchResultsComponent, CategoriesComponent, CarDetailsComponent, ShowCategoryComponent];