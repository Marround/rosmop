import {HomeSectionComponent} from './home/home.component';
import {ProductSectionComponent} from './product/product.component';
export const routs = [
  {path: 'home', component: HomeSectionComponent},
  {path: 'product', component: ProductSectionComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]
