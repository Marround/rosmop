import {Component, OnDestroy, OnInit} from '@angular/core';
import {News} from '../../../modules/news';
import {Subscription} from 'rxjs/Subscription';
import {NewsService} from '../../../service/news.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  moduleId: module.id,
  selector: 'app-newsview',
  templateUrl: './newsview.component.html',
  styleUrls: ['./newsview.component.css']
})
export class NewsviewComponent implements OnInit, OnDestroy {
  pageNotFound: boolean = true;
  private newsId: string;
  private routeSubscription: Subscription;
  newsArr: News[];
  newsOne: News;
  newsSub: Subscription;
  constructor(private newsService: NewsService, private route: ActivatedRoute, private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((params: Params) => {
      this.newsId = params['newsId'];
    });
    this.newsSub = this.newsService.getNews().subscribe(newsArr => {
      this.newsArr = newsArr;
      this.newsOne = this.newsArr.filter(value => {
        return value.linkstr === this.newsId;
      })[0];
      if (!this.newsOne) {
        this.pageNotFound = false;
      }else {
        this.title.setTitle(this.newsOne.title);
        this.meta.updateTag({name: 'keywords', content: this.newsOne.title});
        this.meta.updateTag({name: 'description', content: 'Новость - ' + this.newsOne.title});
      }
    });
  }

  ngOnDestroy() {
    this.newsSub.unsubscribe();
    this.routeSubscription.unsubscribe();
  }
}
