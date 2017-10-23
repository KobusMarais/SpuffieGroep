import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  burgerOpen = false;   // store state
  public isCollapsed = true;
  sSearch ;

  toggleSearch() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleBurger() { // click handler
    this.burgerOpen = !this.burgerOpen;
  }

  constructor() { }

  ngOnInit() {
  }
}
