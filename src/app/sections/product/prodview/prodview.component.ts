import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductionService} from '../../../service/production.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs/Subscription';
import {Goods, Group} from '../../../modules/product';
import {DomSanitizer, Meta, Title} from '@angular/platform-browser';

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
              private _sanitizer: DomSanitizer,
              private title: Title,
              private meta: Meta
              ) {
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
        }else {
          this.title.setTitle(this.product[0].title + ' - продукция Росмоп');
          this.meta.updateTag({name: 'keywords', content: this.product[0].title});
          this.meta.updateTag({name: 'description', content: this.product[0].title + ' - продукция Росмоп'});

          this.meta.updateTag({name: 'og:locate', content: 'ru_RU'});
          this.meta.updateTag({name: 'og:type', content: 'article'});
          this.meta.updateTag({name: 'og:title', content: this.product[0].title});
          this.meta.updateTag({name: 'og:description', content: this.product[0].title});
          this.meta.updateTag({name: 'og:image', content: this.product[0].photo.split('|')[0]});
          this.meta.updateTag({name: 'og:url', content: 'http://rosmop.ru/product/' + this.product[0].filterlink + '/' + this.product[0].routerlink});
          this.meta.updateTag({name: 'og:sitename', content: 'Росмоп'});
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
    // subscription
    this.groupSub.unsubscribe();
    this.goodsSub.unsubscribe();
    this.routeSubscription.unsubscribe();
    // tags
    this.meta.removeTag('name="og:locate"');
    this.meta.removeTag('name="og:type"');
    this.meta.removeTag('name="og:title"');
    this.meta.removeTag('name="og:description"');
    this.meta.removeTag('name="og:image"');
    this.meta.removeTag('name="og:url"');
    this.meta.removeTag('name="og:sitename"');
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
