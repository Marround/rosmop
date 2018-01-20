import {HomeSectionComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {ContactsComponent} from './contacts/contacts.component';
import {NewsComponent} from './news/news.component';
import {ReadysolutionsComponent} from './readysolutions/readysolutions.component';
import {BlogComponent} from './blog/blog.component';
import {AuthComponent} from './auth/auth.component';
import {AdminkaComponent} from './adminka/adminka.component';
import {aspRouts} from './adminka/staticpages/index';
import {AuthGuard} from '../service/adm-guard.service';
import {ProdviewComponent} from './product/prodview/prodview.component';
import {NewsviewComponent} from './news/newsview/newsview.component';
import {BlogviewComponent} from './blog/blogview/blogview.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {FaqComponent} from './faq/faq.component';

export const routs = [
  {path: '', component: HomeSectionComponent},
  {path: 'news', component: NewsComponent},
  {path: 'news/:newsId', component: NewsviewComponent},
  {path: 'product', redirectTo: '/product/mops', pathMatch: 'full'},
  {path: 'product/:group', component: ProductComponent},
  {path: 'product/:group/:prodview', component: ProdviewComponent},
  {path: 'readysolutions', component: ReadysolutionsComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/:blogId', component: BlogviewComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'adminka', redirectTo: '/adminka/productedit', pathMatch: 'full'},
  {path: 'adminka', component: AdminkaComponent, canActivate: [AuthGuard], children: aspRouts},
  {path: '**', component: NotfoundComponent},
];
