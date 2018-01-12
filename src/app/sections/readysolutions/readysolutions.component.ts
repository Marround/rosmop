import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-readysolutions',
  templateUrl: './readysolutions.component.html',
  styleUrls: ['./readysolutions.component.css']
})
export class ReadysolutionsComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Готовые решения - Росмоп - Белгород');
    this.meta.updateTag({name: 'keywords', content: 'Готовые решения'});
    this.meta.updateTag({name: 'description', content: 'Готовые решеия Росмоп'});
  }

  ngOnInit() {
  }

}
