import { MainLayoutComponent } from './../shared/layout/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentListComponent } from './views/document-list/document-list.component';

const routes: Routes = [
    {
        path: '', component: MainLayoutComponent,
        children: [
            { path: 'list', component: DocumentListComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DocumentRoutingModule { }

export const routedComponents = [DocumentListComponent];
