import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule,
  MatTabsModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ProducteditComponent } from './productedit/productedit.component';
import { NewseditComponent } from './newsedit/newsedit.component';
import { BlogeditComponent } from './blogedit/blogedit.component';
import { AddnewsComponent } from './newsedit/addnews/addnews.component';
import {FroalaEditorModule, FroalaViewModule} from 'angular2-froala-wysiwyg';


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
    FormsModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  declarations: [ProducteditComponent, NewseditComponent, BlogeditComponent, AddnewsComponent],
  exports: [ProducteditComponent, NewseditComponent, BlogeditComponent, AddnewsComponent]
})

export class StaticPagesModule {

}
