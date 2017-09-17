import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaqLayoutComponent } from './views/faq-layout/faq-layout.component';

const routes: Routes = [
    { path: '', redirectTo: 'swwager', pathMatch: 'full' },
    { path: ':name', component: FaqLayoutComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FaqRoutingModule { }

export const routedComponents = [FaqLayoutComponent];
