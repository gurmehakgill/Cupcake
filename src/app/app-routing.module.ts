import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';

const routes: Routes = [
  { path: 'first-page', component: FirstPageComponent },
  { path: 'second-page/:quantity', component: SecondPageComponent },
  { path: 'third-page/:quantity/:flavor', component: ThirdPageComponent },
  { path: '', redirectTo: '/first-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
