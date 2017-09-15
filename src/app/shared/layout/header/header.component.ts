import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../auth/service/auth.service';
import { Router } from '@angular/router';
import { UserInfo } from '../../../auth/entity/user-info';

@Component({
  selector: 'sb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isCollapsed: boolean;
  @Output() isCollapsedChange: EventEmitter<boolean> = new EventEmitter();

  userInfo: UserInfo;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userInfo = this.authService.userInfo;
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedChange.emit(this.isCollapsed);
  }

  logout() {
    this.authService.logout().subscribe(
      ok => {
        this.router.navigate(['login']);
      }
    );
  }
}
