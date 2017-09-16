import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-inter-outline-item',
  templateUrl: './inter-outline-item.component.html',
  styleUrls: ['./inter-outline-item.component.scss']
})
export class InterOutlineItemComponent implements OnInit {
  @Input() type: 'codeGroup' | 'code' | 'interGroup' | 'interGroupSub' | 'interGroupModule' | 'inter';
  @Input() label: string;

  @Input() expanded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  add(event: Event) {
    event.preventDefault();
    console.log('123');
  }
}
