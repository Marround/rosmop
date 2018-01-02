import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Blog } from '../modules/blog';


@Injectable()
export class BlogService {
  blogCollection: AngularFirestoreCollection<Blog>;
  blogArr: Observable<Blog[]>;
  blogDoc: AngularFirestoreDocument<Blog>;

  constructor(private readonly afs: AngularFirestore) {
    this.blogCollection = this.afs.collection('blog', ref => ref.orderBy('linkstr', 'desc'));
    this.blogArr = this.blogCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Blog;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }
  getBlog() {
    return this.blogArr;
  }
  addBlog(blog: Blog) {
    this.blogCollection.add(blog);
  }
  updateItem(blog: Blog) {
    this.blogDoc = this.afs.doc(`blog/${blog.id}`);
    this.blogDoc.update(blog);
  }
  deleteBlog(blog: Blog) {
    this.blogDoc = this.afs.doc(`blog/${blog.id}`);
    this.blogDoc.delete();
  }
}
