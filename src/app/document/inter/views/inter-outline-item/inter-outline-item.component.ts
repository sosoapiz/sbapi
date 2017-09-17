import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sb-inter-outline-item',
  templateUrl: './inter-outline-item.component.html',
  styleUrls: ['./inter-outline-item.component.scss']
})
export class InterOutlineItemComponent implements OnInit {
  @Input() type: 'codeGroup' | 'code' | 'interGroup' | 'interGroupSub' | 'interGroupModule' | 'inter';
  @Input() label: string;
  @Input() expanded: boolean = false;

  // string event name => 'refresh' | 'edit' | 'addModule' | 'addInter' | 'addCode' | 'delete'
  @Output() action: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleExpanded(event: Event) {
    event.stopPropagation();
    this.expanded = !this.expanded;
  }

  _stopPropagation(event: Event) {
    event.stopPropagation();
  }

  _action(name) {
    this.action.emit(name);
  }
}
