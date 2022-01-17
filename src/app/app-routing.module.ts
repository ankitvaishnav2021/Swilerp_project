import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // default path redirect to home
  { path: '', component: HomeComponent },
  { path: 'feature', component: FeatureComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }