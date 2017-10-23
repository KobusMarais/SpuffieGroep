import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kylep',
  templateUrl: './kylep.component.html',
  styleUrls: ['./kylep.component.css']
})
export class KylepComponent implements OnInit {

  kylesWebsites: String[] = ['https://wiftyweb.co.za/'];

  constructor() { }

  ngOnInit() {

  }

}
