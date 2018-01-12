import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsService} from '../../service/news.service';
import {News} from '../../modules/news';
import {Subscription} from 'rxjs/Subscription';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  moduleId: module.id,
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {
  newsArr: News[];
  newsSub: Subscription;
  constructor(private newsService: NewsService, private title: Title, private meta: Meta) {
    this.title.setTitle('Новости - Росмоп - Белгород');
    this.meta.updateTag({name: 'keywords', content: 'Новости, Росмоп, моп, товары для клининга'});
    this.meta.updateTag({name: 'description', content: 'Новости Росмоп'});
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
