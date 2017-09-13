import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    LayoutModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    LayoutModule
  ]
})
export class SharedModule { }
