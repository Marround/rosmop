import {BlogeditComponent} from './blogedit/blogedit.component';
import {NewseditComponent} from './newsedit/newsedit.component';
import {ProducteditComponent} from './productedit/productedit.component';
import {FilemanagerComponent} from "./filemanager/filemanager.component";


export const aspRouts = [
  {path: 'blogedit', component: BlogeditComponent},
  {path: 'newsedit', component: NewseditComponent},
  {path: 'productedit', component: ProducteditComponent},
  {path: 'filemanager', component: FilemanagerComponent}
]
