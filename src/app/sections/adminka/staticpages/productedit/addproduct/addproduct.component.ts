import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductionService} from '../../../../../service/production.service';
import {Byappointment, Goods, Group, Material} from '../../../../../modules/product';
import {Subscription} from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit, OnDestroy {
  goodsToAdd: Goods = {
    g_id: '',
    routerlink: '',
    title: '',
    description: '',
    video: '',
    photo: '',
    byappointment: '',
    material: ''
  };
  // grops
  groupArray: Group[];
  groupSub: Subscription;
  // end group
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
    });
    // goods data
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
    this.byappointmentSub.unsubscribe();
    this.materialSub.unsubscribe();
  }
  setRouterLink(event, routerlink) {
    this.goodsToAdd.routerlink = routerlink;
  }
  addGoods() {
    this.productionService.addGoods(this.goodsToAdd);
    this.goodsToAdd.g_id = '';
    this.goodsToAdd.material = '';
    this.goodsToAdd.photo = '';
    this.goodsToAdd.video = '';
    this.goodsToAdd.description = '';
    this.goodsToAdd.title = '';
    this.goodsToAdd.routerlink = '';
    this.goodsToAdd.byappointment = '';
  }
}
