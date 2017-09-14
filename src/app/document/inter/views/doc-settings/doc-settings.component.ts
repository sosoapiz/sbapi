import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-doc-settings',
  templateUrl: './doc-settings.component.html',
  styleUrls: ['./doc-settings.component.scss']
})
export class DocSettingsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: {document: Document}) => {
      // console.log(data);
    });
  }

}
