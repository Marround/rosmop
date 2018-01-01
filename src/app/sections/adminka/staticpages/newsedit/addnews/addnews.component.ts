import { Component, OnInit } from '@angular/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {NewsService} from '../../../../../service/news.service';
import { News } from '../../../../../modules/news';
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class AddnewsComponent implements OnInit {
  date = moment();
  private newsOne: News = {
    date: '',
    title: '',
    linkstr: '',
    textnews: '',
    photo: [
      {
        name: '',
        link: ''
      }
    ]
  };

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }
  addNews() {
    this.newsOne.date = this.date.format('D.M.YYYY');
    if (this.newsOne.title !== '' && this.newsOne.textnews !== '' && this.newsOne.date !== '') {
      this.newsService.addNews(this.newsOne);

      this.newsOne.title = '';
      this.newsOne.linkstr = '';
      this.newsOne.textnews = '';
      this.newsOne.date = '';
      this.date =  moment();
    }
  }
}
