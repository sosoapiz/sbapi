import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterLayoutComponent } from './views/inter-layout/inter-layout.component';


const routes: Routes = [
  { path: '', component: InterLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterRoutingModule { }

export const routedComponents = [InterLayoutComponent];
