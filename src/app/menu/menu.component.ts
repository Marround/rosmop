import {Component, HostListener, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  goToRout(r) {
    this.router.navigate([r]);
  }

  logOut() {
    this.auth.signOut();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = document.documentElement.scrollTop || document.body.scrollTop || 0;
    const menu = document.getElementById('main-menu');
    if (number < 20) {
      menu.classList.remove('mat-elevation-z12');
      menu.classList.remove('nav-colored');
    }else{
      menu.classList.add('mat-elevation-z12');
      menu.classList.add('nav-colored');
    }
  }
}
