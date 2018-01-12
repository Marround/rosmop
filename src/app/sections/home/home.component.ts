import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
// declare let $: any;

@Component({
  moduleId: module.id,
  selector: 'app-home-section',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeSectionComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Росмоп - Белгород');
    this.meta.updateTag({name: 'keywords', content: 'Росмоп, моп, товары для клининга'});
    this.meta.updateTag({name: 'description', content: 'Производство товаров для клининга'});
  }

  ngOnInit() {
    window.scroll(0, 15);
    window.scroll(0, 0);

    // $('.carousel').carousel({
    //   interval: 5000,
    //   pause: false
    // });
  }
}
