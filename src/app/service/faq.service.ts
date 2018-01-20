import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {Faq} from '../modules/faq';

@Injectable()
export class FaqService {
  faqCollection: AngularFirestoreCollection<Faq>;
  faqArr: Observable<Faq[]>;
  faqDoc: AngularFirestoreDocument<Faq>;

  constructor(private readonly afs: AngularFirestore) {
    this.faqCollection = this.afs.collection('faq', ref => ref.orderBy('timestamp', 'asc'));
    this.faqArr = this.faqCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Faq;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getFaq() {
    return this.faqArr;
  }
  addFaq(faq: Faq) {
    this.faqCollection.add(faq);
  }
  updateItem(faq: Faq) {
    this.faqDoc = this.afs.doc(`faq/${faq.id}`);
    this.faqDoc.update(faq);
  }
  deleteFaq(faq: Faq) {
    this.faqDoc = this.afs.doc(`faq/${faq.id}`);
    this.faqDoc.delete();
  }
}
