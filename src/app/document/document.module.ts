import { DocumentDetailResolver } from './service/document-detail-resolver.service';
import { DocumentService } from './service/document.service';
import { ModuleService } from './service/module.service';
import { DocumentRoutingModule } from './document-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentListComponent } from './views/document-list/document-list.component';

@NgModule({
  imports: [
    SharedModule,
    DocumentRoutingModule,
  ],
  declarations: [DocumentListComponent],
  providers: [DocumentDetailResolver, DocumentService, ModuleService]
})
export class DocumentModule { }
