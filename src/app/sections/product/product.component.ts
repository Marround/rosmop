import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductionService} from '../../service/production.service';
import {Byappointment, Goods, Group, Material} from '../../modules/product';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  moduleId: module.id,
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  pageNotFound: boolean = true;
  private group: string;
  private routeSubscription: Subscription;
  pageTitle: string;
// grops
  groupArray: Group[];
  groupFilter: Group[];
  groupSub: Subscription;
  // end group
  // goods
  goodsArray: Goods[];
  goodsToShow: Goods[];
  goodsSub: Subscription;
  // end goods
  // Byappointment
  byappointmentArray: Byappointment[];
  byappointmentSub: Subscription;
  // end Byappointment
  // material
  materialArray: Material[];
  materialSub: Subscription;
  // end material

  constructor(public productionService: ProductionService, private route: ActivatedRoute, private title: Title, private meta: Meta) {
    this.meta.updateTag({name: 'keywords', content: 'Росмоп, МОПы, ПАДы, боннеты, рукавицы, , клининговый инвентарь для ручной уборки, уборочные тележки, швабры'});
    this.meta.updateTag({name: 'description', content: 'Продукция Росмоп'});
    // group data
    this.groupSub = this.productionService.getGroup().subscribe(groupArr => {
      this.groupArray = groupArr;
      this.groupFilter = this.groupArray.filter(value => {
        return value.routerlink === this.group;
      });
      if (this.groupFilter.length > 0) {
        this.pageTitle = this.groupFilter[0].groupname;
        this.title.setTitle('Продукция - ' + this.pageTitle + ' - Росмоп - Белгород');
      }else {
        this.pageNotFound = false;
      }
    });
    // goods data
    this.goodsSub = this.productionService.getGoods().subscribe(goodsArr => {
      this.goodsArray = goodsArr;
      if (this.group) {
        this.goodsToShow = goodsArr.filter(value => {
          return value.filterlink === this.group;
        });
      } else { this.goodsToShow = goodsArr; }
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

  ngOnInit() {
    window.scroll(0, 0);
    this.routeSubscription = this.route.params.subscribe((params: Params) => {
      this.group = params['group'];
      if (this.goodsArray) {
        this.goodsToShow = this.goodsArray.filter(value => {
          return value.filterlink === this.group;
        });
        this.pageTitle = this.groupArray.filter(value => {
          return value.routerlink === this.group;
        })[0].groupname;
        this.title.setTitle('Продукция - ' + this.pageTitle + ' - Росмоп - Белгород');
      }
    });
  }
  ngOnDestroy() {
    this.groupSub.unsubscribe();
    this.goodsSub.unsubscribe();
    this.byappointmentSub.unsubscribe();
    this.materialSub.unsubscribe();
    this.routeSubscription.unsubscribe();
  }
}
