import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home-section',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeSectionComponent implements OnInit{
  constructor() { }

  ngOnInit() {
    window.scroll(0, 15);
    window.scroll(0, 0);

    $('.carousel').carousel({
      interval: 5000
    });
  }
}
