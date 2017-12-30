import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsService} from '../../service/news.service';
import {News} from '../../modules/news';
import {Subscription} from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {
  newsArr: News[];
  newsSub: Subscription;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsSub = this.newsService.getNews().subscribe(newsArr => {
      this.newsArr = newsArr;
    });
  }
  ngOnDestroy() {
    this.newsSub.unsubscribe();
  }
}
