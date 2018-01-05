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

  sociallinks: SocLinks[] = [
    {
      link: 'http://vk.com',
      image: '/assets/img/socialico/vk.png',
      display: 'vk.com/group'
    },
    {
      link: 'http://ok.ru',
      image: '/assets/img/socialico/ok.png',
      display: 'ok.ru/group'
    },
    {
      link: 'http://facebook.com',
      image: '/assets/img/socialico/facebook.png',
      display: 'facebook.com/group'
    },
    {
      link: 'http://instagram.com',
      image: '/assets/img/socialico/Instagram.png',
      display: 'instagram.com/uname'
    },
    {
      link: 'http://twitter.com',
      image: '/assets/img/socialico/twitter.png',
      display: 'twitter.com/uname'
    },
    {
      link: 'http://t.me',
      image: '/assets/img/socialico/telegram.png',
      display: 't.me/uname'
    },
    {
      link: 'http://viber.com',
      image: '/assets/img/socialico/viber.png',
      display: 'viber.com/number'
    },
    {
      link: 'http://whatsapp.com',
      image: '/assets/img/socialico/whatsapp.png',
      display: 'whatsapp.com/number'
    },
    {
      link: 'http://skype.com',
      image: '/assets/img/socialico/skype.png',
      display: 'skype.com/acccount'
    }
    ];

  constructor(public auth: AuthService, private router: Router) { }

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

export interface SocLinks {
  link: string;
  image: string;
  display: string;
}
