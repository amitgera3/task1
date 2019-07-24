import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstExampleComponent } from './first-example/first-example.component';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
