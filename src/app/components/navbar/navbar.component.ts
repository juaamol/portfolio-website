import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CustomLinkComponent } from './custom-link/custom-link.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  imports: [MatIcon, MatButton,CustomLinkComponent, MatSidenavModule, MatToolbar],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  opened: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleOpen() {
    this.opened = !this.opened;
  }
}
