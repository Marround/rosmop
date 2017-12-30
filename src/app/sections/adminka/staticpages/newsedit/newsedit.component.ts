import { Component, OnInit, OnDestroy} from '@angular/core';
import { News } from '../../../../modules/news';
import { NewsService } from '../../../../service/news.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'app-newsedit',
  templateUrl: './newsedit.component.html',
  styleUrls: ['./newsedit.component.css']
})
export class NewseditComponent implements OnInit, OnDestroy {
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
