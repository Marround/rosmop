import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule,
  MatTabsModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatProgressSpinnerModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ProducteditComponent } from './productedit/productedit.component';
import { NewseditComponent } from './newsedit/newsedit.component';
import { BlogeditComponent } from './blogedit/blogedit.component';
import { AddnewsComponent } from './newsedit/addnews/addnews.component';


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
    MatProgressSpinnerModule,
    FormsModule
  ],
  declarations: [ProducteditComponent, NewseditComponent, BlogeditComponent, AddnewsComponent],
  exports: [ProducteditComponent, NewseditComponent, BlogeditComponent]
})

export class StaticPagesModule {

}
