import { ModuleService } from './../service/module.service';
import { DocumentService } from './../service/document.service';
import { DocumentDetailResolver } from './../service/document-detail-resolver.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterLayoutComponent } from './views/inter-layout/inter-layout.component';
import { SharedModule } from '../../shared/shared.module';
import { InterRoutingModule } from './inter-routing.module';
import { InterOutlineComponent } from './views/inter-outline/inter-outline.component';
import { InterOutlineItemComponent } from './views/inter-outline-item/inter-outline-item.component';
import { DocSettingsComponent } from './views/doc-settings/doc-settings.component';
import { DocInfoComponent } from './views/doc-info/doc-info.component';
import { BaseUrlComponent } from './views/base-url/base-url.component';
import { CommonParamComponent } from './views/common-param/common-param.component';
import { ModuleFormComponent } from './partial/module-form/module-form.component';
import { CodeFormComponent } from './partial/code-form/code-form.component';
import { InterFormComponent } from './partial/inter-form/inter-form.component';
import { ModuleAddComponent } from './views/module-add/module-add.component';
import { ModuleEditComponent } from './views/module-edit/module-edit.component';
import { CodeEditComponent } from './views/code-edit/code-edit.component';
import { CodeAddComponent } from './views/code-add/code-add.component';
import { InterAddComponent } from './views/inter-add/inter-add.component';
import { InterEditComponent } from './views/inter-edit/inter-edit.component';
import { InterRequestComponent } from './partial/inter-request/inter-request.component';
import { InterResponseComponent } from './partial/inter-response/inter-response.component';
import { InterService } from '../service/inter.service';
import { InterParamService } from '../service/inter-param.service';
import { InterRespService } from '../service/inter-resp.service';

@NgModule({
  imports: [
    SharedModule,
    InterRoutingModule
  ],
  declarations: [InterLayoutComponent, InterOutlineComponent, InterOutlineItemComponent,
    DocSettingsComponent, DocInfoComponent, BaseUrlComponent, CommonParamComponent,
    ModuleFormComponent, CodeFormComponent, InterFormComponent, ModuleAddComponent,
    ModuleEditComponent, CodeEditComponent, CodeAddComponent, InterAddComponent,
    InterEditComponent, InterRequestComponent, InterResponseComponent],
  providers: [DocumentDetailResolver, DocumentService, ModuleService, InterService,
    InterParamService, InterRespService]
})
export class InterModule { }
