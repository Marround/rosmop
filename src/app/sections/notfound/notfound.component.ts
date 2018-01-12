import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Страница не найдена - Росмоп - Белгород');
    this.meta.updateTag({name: 'keywords', content: 'Страница не найдена, page not found, 404'});
    this.meta.updateTag({name: 'description', content: 'Страница не найдена Росмоп'});
  }

  ngOnInit() {
  }

}
