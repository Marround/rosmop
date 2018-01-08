import {Component, OnDestroy, OnInit} from '@angular/core';
import {Byappointment, Goods, Group, Material} from '../../../../modules/product';
import {Subscription} from 'rxjs/Subscription';
import {ProductionService} from '../../../../service/production.service';

declare let $: any;

@Component({
  moduleId: module.id,
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit, OnDestroy {
  // grops
  groupArray: Group[];
  groupSub: Subscription;
  selectedGroup: string;
  // end group
  // goods
  goodsArray: Goods[];
  goodsToShow: Goods[];
  goodsSub: Subscription;
  goodsToUpdate: Goods;
  // end goods
  // Byappointment
  byappointmentArray: Byappointment[];
  byappointmentSub: Subscription;
  // end Byappointment
  // material
  materialArray: Material[];
  materialSub: Subscription;
  // end material

  constructor(private productionService: ProductionService) { }

  ngOnInit() {
    // group data
    this.groupSub = this.productionService.getGroup().subscribe(groupArr => {
      this.groupArray = groupArr;
      this.selectedGroup = this.groupArray[0].id;
      console.log(this.groupArray);
    });
    // goods data
    this.goodsSub = this.productionService.getGoods().subscribe(goodsArr => {
      this.goodsArray = goodsArr;
      this.goodsToShow = goodsArr;
    });
    // Byappointment data
    this.byappointmentSub = this.productionService.getByappointment().subscribe(byappointmentArr => {
      this.byappointmentArray = byappointmentArr;
    });
    // material
    this.materialSub = this.productionService.getMaterial().subscribe(materialArr => {
      this.materialArray = materialArr;
    });
  }
  ngOnDestroy() {
    this.groupSub.unsubscribe();
    this.goodsSub.unsubscribe();
    this.byappointmentSub.unsubscribe();
    this.materialSub.unsubscribe();
  }
  updateGoods() {
    this.productionService.updateGoods(this.goodsToUpdate);
    this.closeEPF();
  }
  deleteGoods() {
    if (this.goodsToUpdate) {
      this.productionService.deleteGoods(this.goodsToUpdate);
      this.closeEPF();
    }
  }
  toEdit(event, goods) {
    this.goodsToUpdate = goods;
    $('#editproductform').collapse( 'show' );
  }
  showGroup(event, id) {
    this.goodsToShow = this.goodsArray.filter(value => {
      return value.g_id === id;
    });
  }
  closeEPF() {
    $('#editproductform').collapse( 'hide' );
    this.goodsToUpdate = null;
  }
  setRouterLink(event, routerlink) {
    this.goodsToUpdate.routerlink = routerlink;
  }
}
