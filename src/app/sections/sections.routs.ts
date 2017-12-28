import {HomeSectionComponent} from './home/home.component';
import {ProductSectionComponent} from './product/product.component';
import {ContactsComponent} from './contacts/contacts.component';
import {NewsComponent} from './news/news.component';
import {ReadysolutionsComponent} from './readysolutions/readysolutions.component';
import {BlogComponent} from './blog/blog.component';
import {AuthComponent} from './auth/auth.component';
import {AdminkaComponent} from './adminka/adminka.component';
import {aspRouts} from './adminka/staticpages/index';
export const routs = [
  {path: 'home', component: HomeSectionComponent},
  {path: 'news', component: NewsComponent},
  {path: 'product', component: ProductSectionComponent},
  {path: 'readysolutions', component: ReadysolutionsComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'adminka', redirectTo: '/adminka/productedit', pathMatch: 'full'},
  {path: 'adminka', component: AdminkaComponent, children: aspRouts},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]
