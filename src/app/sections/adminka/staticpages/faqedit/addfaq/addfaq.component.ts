import { Component, OnInit } from '@angular/core';
import {FaqService} from '../../../../../service/faq.service';
import {Faq} from '../../../../../modules/faq';

@Component({
  moduleId: module.id,
  selector: 'app-addfaq',
  templateUrl: './addfaq.component.html',
  styleUrls: ['./addfaq.component.css']
})
export class AddfaqComponent implements OnInit {
  faq: Faq = {
    question: '',
    answer: '',
    visible: false,
    timestamp: null
  };
  constructor(private faqService: FaqService) { }

  addFaq() {
    if (this.faq.question !== '' && this.faq.answer !== '') {
      this.faq.timestamp = new Date();
      this.faqService.addFaq(this.faq);

      this.faq.question = '';
      this.faq.answer = '';
      this.faq.visible = false;
    }
  }

  ngOnInit() {
  }

}
