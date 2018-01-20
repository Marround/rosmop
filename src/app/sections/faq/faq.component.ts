import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaqService} from '../../service/faq.service';
import {Faq} from '../../modules/faq';
import {Subscription} from 'rxjs/Subscription';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit, OnDestroy {
  faqArr: Faq[];
  faqSub: Subscription;
  constructor(private faqService: FaqService, private title: Title, private meta: Meta) {
    this.title.setTitle('Готовые решения - Росмоп - Белгород');
    this.meta.updateTag({name: 'keywords', content: 'Готовые решения'});
    this.meta.updateTag({name: 'description', content: 'Готовые решения'});
  }

  ngOnInit() {
    this.faqSub = this.faqService.getFaq().subscribe(faqArr => {
      this.faqArr = faqArr;
    });
  }
  ngOnDestroy() {
    this.faqSub.unsubscribe();
  }

}
