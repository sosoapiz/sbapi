import { DocumentRoutingModule } from './document-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentListComponent } from './document-list/document-list.component';

@NgModule({
  imports: [
    SharedModule,
    DocumentRoutingModule,
  ],
  declarations: [DocumentListComponent]
})
export class DocumentModule { }
