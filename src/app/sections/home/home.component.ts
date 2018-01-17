import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {LoadJsonService} from '../../service/loadjson.service';
declare let $: any;

@Component({
  moduleId: module.id,
  selector: 'app-home-section',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeSectionComponent implements OnInit {
  reviewsUrl = '/assets/json/reviews.json';
  reviewsArr: Reviews[];
  errorMessage: string;

  constructor(private title: Title, private meta: Meta, private jsonService: LoadJsonService) {
    this.title.setTitle('Росмоп - Белгород');
    this.meta.updateTag({name: 'keywords', content: 'Росмоп, моп, товары для клининга'});
    this.meta.updateTag({name: 'description', content: 'Производство товаров для клининга'});
  }

  ngOnInit() {
    this.jsonService.getJSON(this.reviewsUrl).subscribe(data => {
      this.reviewsArr = data.reviews;
      console.log(this.reviewsArr);
    }, error => {
      this.errorMessage = < any > error;
    });
    window.scroll(0, 15);
    window.scroll(0, 0);

    $('#reviewsCarousel').carousel({
      interval: 10000,
      pause: false
    });
  }
}
export interface Reviews {
  photo: string;
  review: string;
  name: string;
  org: string;
}
