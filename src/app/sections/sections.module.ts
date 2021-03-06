import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';

import { HomeSectionComponent } from './home/home.component';
import {ProductComponent} from './product/product.component';
import { ContactsComponent } from './contacts/contacts.component';
import {FooterComponent} from '../footer/footer.component';
import { NewsComponent } from './news/news.component';
import { BlogComponent } from './blog/blog.component';
import { ReadysolutionsComponent } from './readysolutions/readysolutions.component';
import { AuthComponent } from './auth/auth.component';
import { AdminkaComponent } from './adminka/adminka.component';
import {StaticPagesModule, aspRouts} from './adminka/staticpages/index';
import {RouterModule} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {AuthGuard} from '../service/adm-guard.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProdviewComponent } from './product/prodview/prodview.component';
import { NewsviewComponent } from './news/newsview/newsview.component';
import { BlogviewComponent } from './blog/blogview/blogview.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FaqComponent } from './faq/faq.component';


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
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard],
  declarations: [
    HomeSectionComponent, ProductComponent, ContactsComponent,
    FooterComponent, NewsComponent, BlogComponent,
    ReadysolutionsComponent, AuthComponent, AdminkaComponent,
    ProdviewComponent, NewsviewComponent, BlogviewComponent,
    NotfoundComponent, FaqComponent
  ],
  exports: [
    HomeSectionComponent, ProductComponent, ContactsComponent,
    FooterComponent, NewsComponent, BlogComponent,
    ReadysolutionsComponent, AuthComponent, AdminkaComponent,
    ProdviewComponent, NewsviewComponent, BlogviewComponent,
    NotfoundComponent, FaqComponent
  ]
})

export class SectionsModule {

}
