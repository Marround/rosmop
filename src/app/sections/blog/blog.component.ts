import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {BlogService} from '../../service/blog.service';
import {Blog} from '../../modules/blog';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  moduleId: module.id,
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {
  blogArr: Blog[];
  blogSub: Subscription;
  constructor(private blogService: BlogService, private title: Title, private meta: Meta) {
    this.title.setTitle('Блог - Росмоп - Белгород');
    this.meta.updateTag({name: 'keywords', content: 'Блог, Росмоп, товары для клининга'});
    this.meta.updateTag({name: 'description', content: 'Блог Росмоп'});
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
