import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '', children: [
            { path: '', redirectTo: 'faq', pathMatch: 'full'},
            {
                path: 'faq',
                loadChildren: 'app/help/faq/faq.module#FaqModule'
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HelpRoutingModule { }

export const routedComponents = [];
