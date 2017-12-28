import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SectionsModule, routs} from './sections/index';
import {RouterModule} from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    RouterModule.forRoot(routs),
    BrowserModule,
    BrowserAnimationsModule,
    SectionsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
