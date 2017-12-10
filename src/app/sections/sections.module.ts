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

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, MatCardModule, MatTabsModule, MatListModule, MatIconModule, MatButtonModule],
  declarations: [HomeSectionComponent, ProductSectionComponent, ContactsComponent],
  exports: [HomeSectionComponent, ProductSectionComponent, ContactsComponent]
})

export class SectionsModule {

}
