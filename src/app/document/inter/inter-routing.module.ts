import { CodeEditComponent } from './views/code-edit/code-edit.component';
import { CodeAddComponent } from './views/code-add/code-add.component';
import { InterEditComponent } from './views/inter-edit/inter-edit.component';
import { InterAddComponent } from './views/inter-add/inter-add.component';
import { ModuleEditComponent } from './views/module-edit/module-edit.component';
import { ModuleAddComponent } from './views/module-add/module-add.component';
import { DocumentDetailResolver } from './../service/document-detail-resolver.service';
import { CommonParamComponent } from './views/common-param/common-param.component';
import { BaseUrlComponent } from './views/base-url/base-url.component';
import { DocInfoComponent } from './views/doc-info/doc-info.component';
import { DocSettingsComponent } from './views/doc-settings/doc-settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterLayoutComponent } from './views/inter-layout/inter-layout.component';


const routes: Routes = [
  {
    path: '', component: InterLayoutComponent, resolve: {document: DocumentDetailResolver},
    children: [
      { path: '', children: [
        { path: '', redirectTo: 'settings', pathMatch: 'full'},
        {
          path: 'settings', component: DocSettingsComponent,
          children: [
            { path: '', children: [
              { path: '', redirectTo: 'docInfo', pathMatch: 'full'},
              { path: 'docInfo', component: DocInfoComponent },
              { path: 'baseUrl', component: BaseUrlComponent },
              { path: 'commonParam', component: CommonParamComponent }
            ]}
          ]
        },
        {
          path: 'code',
          children: [
            { path: 'add', component: CodeAddComponent },
            { path: ':codeId', component: CodeEditComponent }
          ]
        },
        {
          path: 'module',
          children: [
            { path: 'add', component: ModuleAddComponent },
            { path: ':moduleId', component: ModuleEditComponent }
          ]
        },
        {
          path: 'inter',
          children: [
            { path: 'add', component: InterAddComponent },
            { path: ':interId', component: InterEditComponent }
          ]
        }
      ]}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterRoutingModule { }

export const routedComponents = [InterLayoutComponent];
