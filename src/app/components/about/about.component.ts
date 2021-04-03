import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  appVersion: String

  constructor() { }

  ngOnInit(): void {
    this.appVersion = '0.0.1' 
  }

}
