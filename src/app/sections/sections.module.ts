import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule,
  MatTabsModule
} from '@angular/material';

import { HomeSectionComponent } from './home/home.component';
import {ProductSectionComponent} from './product/product.component';
import { ContactsComponent } from './contacts/contacts.component';
import {FooterComponent} from '../footer/footer.component';
import { NewsComponent } from './news/news.component';
import { BlogComponent } from './blog/blog.component';
import { ReadysolutionsComponent } from './readysolutions/readysolutions.component';
import { AuthComponent } from './auth/auth.component';
import { AdminkaComponent } from './adminka/adminka.component';
import {StaticPagesModule, aspRouts} from './adminka/staticpages/index';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild(aspRouts),
    StaticPagesModule,
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [HomeSectionComponent, ProductSectionComponent, ContactsComponent, FooterComponent, NewsComponent, BlogComponent, ReadysolutionsComponent, AuthComponent, AdminkaComponent],
  exports: [HomeSectionComponent, ProductSectionComponent, ContactsComponent, NewsComponent, BlogComponent, ReadysolutionsComponent, AuthComponent]
})

export class SectionsModule {

}
