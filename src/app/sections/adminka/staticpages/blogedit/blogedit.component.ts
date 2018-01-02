import { Component, OnInit, OnDestroy } from '@angular/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {Subscription} from 'rxjs/Subscription';
import * as moment from 'moment';
import {BlogService} from '../../../../service/blog.service';
import {Blog} from '../../../../modules/blog';

@Component({
  moduleId: module.id,
  selector: 'app-blogedit',
  templateUrl: './blogedit.component.html',
  styleUrls: ['./blogedit.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class BlogeditComponent implements OnInit, OnDestroy {
  date = moment();
  blogArr: Blog[];
  blogSub: Subscription;
  editState = false;
  blogToEdit: Blog;
  constructor(private blogService: BlogService) { }

  deleteBlog(even, blog) {
    this.blogService.deleteBlog(blog);
  }
  editBlog(event, blog) {
    document.getElementById('blog-id-' + blog.id).classList.toggle('d-none');
    this.editState = true;
    this.blogToEdit = blog;

  }
  updateBlog(blog: Blog) {
    this.blogService.updateItem(blog);
    this.clearState(blog);
  }

  clearState(blog) {
    document.getElementById('blog-id-' + blog.id).classList.toggle('d-none');
    this.editState = false;
    this.blogToEdit = null;
  }

  ngOnInit() {
    this.blogSub = this.blogService.getBlog().subscribe(blogArr => {
      this.blogArr = blogArr;
    });
  }
  ngOnDestroy() {
    this.blogSub.unsubscribe();
  }

}
