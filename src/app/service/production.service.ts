import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Group, Goods, Byappointment, Material } from '../modules/product';

@Injectable()
export class ProductionService {
  // group array
  groupCollection: AngularFirestoreCollection<Group>;
  groupArray: Observable<Group[]>;
  groupDoc: AngularFirestoreDocument<Group>;
  // end group array
  // goods array
  goodsCollection: AngularFirestoreCollection<Goods>;
  goodsArray: Observable<Goods[]>;
  goodsDoc: AngularFirestoreDocument<Goods>;
  // goods end array
  // Byappointment
  byappointmentCollection: AngularFirestoreCollection<Byappointment>;
  byappointmentArray: Observable<Byappointment[]>;
  byappointmentDoc: AngularFirestoreDocument<Byappointment>;
  // end Byappointment
  // Material
  materialCollection: AngularFirestoreCollection<Material>;
  materialArray: Observable<Material[]>;
  materialDoc: AngularFirestoreDocument<Material>;
  // end Material
  constructor(private readonly afs: AngularFirestore) {
    // collections
    this.groupCollection = this.afs.collection('groups', ref => ref.orderBy('order', 'asc'));
    this.goodsCollection = this.afs.collection('goods');
    this.byappointmentCollection = this.afs.collection('byappointment');
    this.materialCollection = this.afs.collection('material');
    // arrays
    this.groupArray = this.groupCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Group;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    this.goodsArray = this.goodsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Goods;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    this.byappointmentArray = this.byappointmentCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Byappointment;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    this.materialArray = this.materialCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Material;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }
  // get functions
  getGroup() {
    return this.groupArray;
  }
  getGoods() {
    return this.goodsArray;
  }
  getByappointment() {
    return this.byappointmentArray;
  }
  getMaterial() {
    return this.materialArray;
  }
  // end get functions
  // add functions
  addGoods(goods: Goods) {
    this.goodsCollection.add(goods);
  }
  // end add functions
  // update functions
  updateGoods(goods: Goods) {
    this.goodsDoc = this.afs.doc(`goods/${goods.id}`);
    this.goodsDoc.update(goods);
  }
  // update functions
  // delete functions
  deleteGoods(goods: Goods) {
    this.goodsDoc = this.afs.doc(`goods/${goods.id}`);
    this.goodsDoc.delete();
  }
  // delete functions
}
