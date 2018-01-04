import { NgModule } from '@angular/core';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AuthService } from './auth.service';
import { NotifyService } from './notify.service';
import {NewsService} from './news.service';
import {BlogService} from './blog.service';
import {UploadfileService} from './uploadfile.service';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [AuthService, NotifyService, NewsService, BlogService, UploadfileService],
})
export class ServiceModule { }
