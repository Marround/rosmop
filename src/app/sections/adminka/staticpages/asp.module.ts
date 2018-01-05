import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule,
  MatTabsModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule,
  MatPaginatorModule, MatSortModule, MatTableModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ProducteditComponent } from './productedit/productedit.component';
import { NewseditComponent } from './newsedit/newsedit.component';
import { BlogeditComponent } from './blogedit/blogedit.component';
import { AddnewsComponent } from './newsedit/addnews/addnews.component';
import {FroalaEditorModule, FroalaViewModule} from 'angular2-froala-wysiwyg';
import { AddblogComponent } from './blogedit/addblog/addblog.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { AddproductComponent } from './productedit/addproduct/addproduct.component';


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
    FormsModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  declarations: [ProducteditComponent, NewseditComponent, BlogeditComponent, AddnewsComponent, AddblogComponent, FilemanagerComponent, AddproductComponent],
  exports: [ProducteditComponent, NewseditComponent, BlogeditComponent, AddnewsComponent, AddblogComponent, FilemanagerComponent, AddproductComponent]
})

export class StaticPagesModule {

}
