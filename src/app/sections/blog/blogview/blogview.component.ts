import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogService} from '../../../service/blog.service';
import {Subscription} from 'rxjs/Subscription';
import {Blog} from '../../../modules/blog';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  moduleId: module.id,
  selector: 'app-blogview',
  templateUrl: './blogview.component.html',
  styleUrls: ['./blogview.component.css']
})
export class BlogviewComponent implements OnInit, OnDestroy {
  pageNotFound: boolean = true;
  private blogId: string;
  private routeSubscription: Subscription;
  blogArr: Blog[];
  blogOne: Blog;
  blogSub: Subscription;
  constructor(public blogService: BlogService, private route: ActivatedRoute, private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((params: Params) => {
      this.blogId = params['blogId'];
    });
    this.blogSub = this.blogService.getBlog().subscribe(blogArr => {
      this.blogArr = blogArr;
      this.blogOne = this.blogArr.filter(value => {
        return value.linkstr === this.blogId;
      })[0];
      if (!this.blogOne) {
        this.pageNotFound = false;
      }else {
        this.title.setTitle(this.blogOne.title);
        this.meta.updateTag({name: 'keywords', content: this.blogOne.title});
        this.meta.updateTag({name: 'description', content: 'Блог - ' + this.blogOne.title});
      }
    });
  }
  ngOnDestroy() {
    this.blogSub.unsubscribe();
    this.routeSubscription.unsubscribe();
  }
}
