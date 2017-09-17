import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqLayoutComponent } from './views/faq-layout/faq-layout.component';
import { SharedModule } from '../../shared/shared.module';
import { FaqRoutingModule } from './faq-routing.module';
import { FaqService } from './service/faq.service';

@NgModule({
  imports: [
    SharedModule,
    FaqRoutingModule
  ],
  declarations: [FaqLayoutComponent],
  providers: [FaqService]
})
export class FaqModule { }
