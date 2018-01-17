import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Контакты - Росмоп - Белгород');
    this.meta.updateTag({name: 'keywords', content: 'Контакты, телефон, факс, email, почта'});
    this.meta.updateTag({name: 'description', content: 'Контакты Росмоп'});
  }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
