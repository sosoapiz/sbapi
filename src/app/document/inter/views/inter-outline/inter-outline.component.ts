import { ActivatedRoute } from '@angular/router';
import { Module } from './../../../entity/module';
import { ModuleService } from './../../../service/module.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-inter-outline',
  templateUrl: './inter-outline.component.html',
  styleUrls: ['./inter-outline.component.scss']
})
export class InterOutlineComponent implements OnInit {
  document;

  modules: Module[];

  constructor(private moduleService: ModuleService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { document: Document }) => {
      this.document = data.document;
      this.loadModules();
    });
  }

  loadModules() {
    this.moduleService.list(this.document.id).subscribe(
      modules => this.modules = modules
    );
  }

}
