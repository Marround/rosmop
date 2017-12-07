import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = document.documentElement.scrollTop || document.body.scrollTop || 0;
    let menu = document.getElementById('main-menu');
    if (number < 20) {
      menu.classList.remove('mat-elevation-z12');
      menu.classList.remove('nav-colored');
    }else{
      menu.classList.add('mat-elevation-z12');
      menu.classList.add('nav-colored');
    }
  }
}
