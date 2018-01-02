import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {BlogService} from '../../service/blog.service';
import {Blog} from '../../modules/blog';

@Component({
  moduleId: module.id,
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {
  blogArr: Blog[];
  blogSub: Subscription;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogSub = this.blogService.getBlog().subscribe(blogArr => {
      this.blogArr = blogArr;
    });
  }
  ngOnDestroy() {
    this.blogSub.unsubscribe();
  }

}
