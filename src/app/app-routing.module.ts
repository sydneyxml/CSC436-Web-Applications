import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TravelRequestComponent} from './travel-request/travel-request.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'travel-request', component: TravelRequestComponent},
  {path: '', redirectTo: 'about', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
