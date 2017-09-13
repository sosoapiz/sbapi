import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterLayoutComponent } from './views/inter-layout/inter-layout.component';
import { SharedModule } from '../../shared/shared.module';
import { InterRoutingModule } from './inter-routing.module';
import { InterOutlineComponent } from './views/inter-outline/inter-outline.component';
import { InterOutlineItemComponent } from './views/inter-outline-item/inter-outline-item.component';

@NgModule({
  imports: [
    SharedModule,
    InterRoutingModule
  ],
  declarations: [InterLayoutComponent, InterOutlineComponent, InterOutlineItemComponent]
})
export class InterModule { }
