import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule,
  MatTabsModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule,
  MatPaginatorModule, MatSortModule, MatTableModule, MatCheckboxModule, MatExpansionModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ProducteditComponent } from './productedit/productedit.component';
import { NewseditComponent } from './newsedit/newsedit.component';
import { BlogeditComponent } from './blogedit/blogedit.component';
import { AddnewsComponent } from './newsedit/addnews/addnews.component';
import { AddblogComponent } from './blogedit/addblog/addblog.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { AddproductComponent } from './productedit/addproduct/addproduct.component';
import {CKEditorModule} from 'ng2-ckeditor';
import { FaqeditComponent } from './faqedit/faqedit.component';
import { AddfaqComponent } from './faqedit/addfaq/addfaq.component';


@NgModule({
  imports: [
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatExpansionModule,
    MatCheckboxModule,
    FormsModule,
    CKEditorModule
  ],
  declarations: [
    ProducteditComponent, NewseditComponent, BlogeditComponent,
    AddnewsComponent, AddblogComponent, FilemanagerComponent,
    AddproductComponent, FaqeditComponent, AddfaqComponent
  ],
  exports: [
    ProducteditComponent, NewseditComponent, BlogeditComponent,
    AddnewsComponent, AddblogComponent, FilemanagerComponent,
    AddproductComponent, FaqeditComponent
  ]
})

export class StaticPagesModule {

}
