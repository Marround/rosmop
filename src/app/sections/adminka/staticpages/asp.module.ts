import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule,
  MatTabsModule, MatInputModule, MatFormFieldModule, MatSelectModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ProducteditComponent } from './productedit/productedit.component';
import { NewseditComponent } from './newsedit/newsedit.component';
import { BlogeditComponent } from './blogedit/blogedit.component';


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
    FormsModule
  ],
  declarations: [ProducteditComponent, NewseditComponent, BlogeditComponent],
  exports: [ProducteditComponent, NewseditComponent, BlogeditComponent]
})

export class StaticPagesModule {

}
