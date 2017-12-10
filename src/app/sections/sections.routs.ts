import {HomeSectionComponent} from './home/home.component';
import {ProductSectionComponent} from './product/product.component';
import {ContactsComponent} from "./contacts/contacts.component";
export const routs = [
  {path: 'home', component: HomeSectionComponent},
  {path: 'product', component: ProductSectionComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]
