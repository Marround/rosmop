import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { News } from '../modules/news';

@Injectable()
export class NewsService {
  newsCollection: AngularFirestoreCollection<News>;
  newsArr: Observable<News[]>;
  newsDoc: AngularFirestoreDocument<News>;

  constructor(private readonly afs: AngularFirestore) {
    // this.newsArr = this.afs.collection('news').valueChanges();
    this.newsCollection = this.afs.collection('news', ref => ref.orderBy('linkstr', 'desc')); //ref => ref.orderBy('date', 'desc')

    this.newsArr = this.newsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as News;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getNews() {
    return this.newsArr;
  }
  addNews(news: News) {
    this.newsCollection.add(news);
  }
  updateItem(news: News) {
    this.newsDoc = this.afs.doc(`news/${news.id}`);
    this.newsDoc.update(news);
  }
  deleteNews(news: News) {
    this.newsDoc = this.afs.doc(`news/${news.id}`);
    this.newsDoc.delete();
  }
}
