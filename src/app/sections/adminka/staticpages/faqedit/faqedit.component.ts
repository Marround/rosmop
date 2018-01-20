import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaqService} from '../../../../service/faq.service';
import {Subscription} from 'rxjs/Subscription';
import {Faq} from '../../../../modules/faq';

@Component({
  selector: 'app-faqedit',
  templateUrl: './faqedit.component.html',
  styleUrls: ['./faqedit.component.css']
})
export class FaqeditComponent implements OnInit, OnDestroy {
  faqArr: Faq[];
  faqSub: Subscription;
  editState = false;
  faqToEdit: Faq;
  constructor(private faqService: FaqService) { }

  deleteFAQ(even, faq) {
    this.faqService.deleteFaq(faq);
  }
  editFAQ(event, faq) {
    document.getElementById('faq-id-' + faq.id).classList.toggle('d-none');
    this.editState = true;
    this.faqToEdit = faq;

  }
  updateFAQ(faq: Faq) {
    this.faqService.updateItem(faq);
    this.clearState(faq);
  }

  clearState(faq) {
    document.getElementById('faq-id-' + faq.id).classList.toggle('d-none');
    this.editState = false;
    this.faqToEdit = null;
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
