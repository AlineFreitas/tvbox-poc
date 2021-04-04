import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  NAV_ITEMS = [
    {title: 'Dashboard', frameURL:'dashboard.html'},
    {title: 'Live', frameURL:'live.html'},
    {title: 'Movies', frameURL:'movies.html'},
    {title: 'Series', frameURL:'series.html'},
    {title: 'Kids', frameURL:'kids.html'},
    {title: 'Explore', frameURL:'explore.html'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
