import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logChange(value) {
    console.log(value);
  }
}
