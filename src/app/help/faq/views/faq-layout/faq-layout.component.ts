import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../service/faq.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'sb-faq-layout',
  templateUrl: './faq-layout.component.html',
  styleUrls: ['./faq-layout.component.scss']
})
export class FaqLayoutComponent implements OnInit {

  articles: {title?: string, content?: string}[];

  panelStyle = {
    'background': '#ffffff',
    'border-radius': '0px',
    'margin-bottom': '24px',
    'border': '0px'
  };

  constructor(private faqService: FaqService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      let name = paramMap.get('name');
      if (name) {
        this.faqService.get(name).subscribe(
          articles => this.articles = articles
        );
      }
    });
  }

}
