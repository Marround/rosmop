import { Component, OnInit } from '@angular/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';
import {BlogService} from '../../../../../service/blog.service';
import {Blog} from '../../../../../modules/blog';


@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class AddblogComponent implements OnInit {
  blog: Blog = {
    date: '',
    title: '',
    linkstr: '',
    textblog: '',
  };
  public options: Object = {
    placeholderText: 'Текст блога',
    language: 'ru'
  };
  date = moment();
  constructor(private blogService: BlogService) { }
  addBlog() {
    this.blog.date = this.date.format('D.M.YYYY');
    if (this.blog.title !== '' && this.blog.textblog !== '' && this.blog.date !== '') {
      this.blogService.addBlog(this.blog);

      this.blog.title = '';
      this.blog.linkstr = '';
      this.blog.textblog = '';
      this.blog.date = '';
      this.date =  moment();
    }
  }
  ngOnInit() {
  }
}
