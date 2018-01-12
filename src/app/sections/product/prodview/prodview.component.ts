import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductionService} from '../../../service/production.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs/Subscription';
import {Goods, Group} from '../../../modules/product';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-prodview',
  templateUrl: './prodview.component.html',
  styleUrls: ['./prodview.component.css']
})
export class ProdviewComponent implements OnInit, OnDestroy {
  pageNotFound: boolean = true;
  private group: string;
  private prodview: string;
  private routeSubscription: Subscription;
  // grops
  groupArray: Group[];
  groupSub: Subscription;
  // end group
  // goods
  goodsArray: Goods[];
  product: Goods[];
  goodsSub: Subscription;
  // end goods
  photos: string[];
  activePhoto: string;
  constructor(public productionService: ProductionService,
              private route: ActivatedRoute,
              private router: Router,
              private _location: Location,
              private _sanitizer: DomSanitizer) {
    // this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(videoURL);
    // group data
    this.groupSub = this.productionService.getGroup().subscribe(groupArr => {
      this.groupArray = groupArr;
    });
    // goods data
    this.goodsSub = this.productionService.getGoods().subscribe(goodsArr => {
      this.goodsArray = goodsArr;
      if (this.group) {
        this.product = this.goodsArray.filter(value => {
          return (value.routerlink === this.prodview && value.filterlink === this.group);
        });
        if (!this.product.length) {
          this.pageNotFound = false;
        }
      }
      this.photos = this.product[0].photo.split('|');
      this.activePhoto = this.photos[0];
    });
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((params: Params) => {
      this.group = params['group'];
      this.prodview = params['prodview'];
    });
  }
  ngOnDestroy() {
    this.groupSub.unsubscribe();
    this.goodsSub.unsubscribe();
    this.routeSubscription.unsubscribe();
  }
  closeEPF() {
    this._location.back();
  }
  switchActivePhoto(photoURL) {
    this.activePhoto = photoURL;
  }
  getEmbed(videoURL) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(videoURL);
  }
}
