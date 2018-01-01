import { Component, OnInit, OnDestroy} from '@angular/core';
import { News } from '../../../../modules/news';
import { NewsService } from '../../../../service/news.service';
import {Subscription} from 'rxjs/Subscription';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {FormGroup} from '@angular/forms';
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'app-newsedit',
  templateUrl: './newsedit.component.html',
  styleUrls: ['./newsedit.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class NewseditComponent implements OnInit, OnDestroy {
  date = moment();
  newsArr: News[];
  newsSub: Subscription;
  editState = false;
  newsToEdit: News;

  constructor(private newsService: NewsService) { }

  deleteNews(even, news) {
    this.newsService.deleteNews(news);
  }
  editNews(event, news) {
    document.getElementById('news-id-' + news.id).classList.toggle('d-none');
    this.editState = true;
    this.newsToEdit = news;

  }
  updateNews(news: News) {
    this.newsService.updateItem(news);
    this.clearState(news);
  }

  clearState(news) {
    document.getElementById('news-id-' + news.id).classList.toggle('d-none');
    this.editState = false;
    this.newsToEdit = null;
  }

  ngOnInit() {
    this.newsSub = this.newsService.getNews().subscribe(newsArr => {
      this.newsArr = newsArr;
    });
  }
  ngOnDestroy() {
    this.newsSub.unsubscribe();
  }
}
