import {BlogeditComponent} from './blogedit/blogedit.component';
import {NewseditComponent} from './newsedit/newsedit.component';
import {ProducteditComponent} from './productedit/productedit.component';
import {FilemanagerComponent} from './filemanager/filemanager.component';
import {FaqeditComponent} from './faqedit/faqedit.component';


export const aspRouts = [
  {path: 'blogedit', component: BlogeditComponent},
  {path: 'newsedit', component: NewseditComponent},
  {path: 'productedit', component: ProducteditComponent},
  {path: 'filemanager', component: FilemanagerComponent},
  {path: 'faqedit', component: FaqeditComponent}
]
