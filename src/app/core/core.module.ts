import { SpkHttpModule } from './http/spk-http.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SpkHttpModule
  ],
  declarations: []
})
export class CoreModule { }
