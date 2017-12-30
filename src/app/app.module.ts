import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SectionsModule, routs} from './sections/index';
import {RouterModule} from '@angular/router';
import {ServiceModule} from './service/service.module';
import { MenuComponent } from './menu/menu.component';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
// import { AngularFireAuthModule } from 'angularfire2/auth';
export const firebaseConfig = environment.firebase;


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    RouterModule.forRoot(routs),
    AngularFireModule.initializeApp(firebaseConfig),
    ServiceModule,
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
