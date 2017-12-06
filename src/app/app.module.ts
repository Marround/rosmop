import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SectionsModule, routs} from "./sections/index";
import {RouterModule} from "@angular/router";
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule, MatIconModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(routs),
    BrowserModule,
    BrowserAnimationsModule,
    SectionsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
