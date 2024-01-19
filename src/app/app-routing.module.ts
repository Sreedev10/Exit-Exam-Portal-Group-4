import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExithomeComponent } from './exithome/exithome.component';
import { ExitRegComponent } from './exit-reg/exit-reg.component';
import { ExitaboutComponent } from './exitabout/exitabout.component';
import { ExitadminComponent } from './exitadmin/exitadmin.component';
// import { CondactComponent } from './condact/condact.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { StuddashComponent } from './studdash/studdash.component';
import { ExitdetailsComponent } from './exitdetails/exitdetails.component';
import { ViewregComponent } from './viewreg/viewreg.component';
import { StudcourseComponent } from './studcourse/studcourse.component';
import { StudlistComponent } from './studlist/studlist.component';

const routes: Routes = [
  {path:"",component:ExithomeComponent},
  {path:"reg",component:ExitRegComponent},
  {path:"about",component:ExitaboutComponent},
  {path:"admin",component:ExitadminComponent},
  // {path:"condact",component:CondactComponent}, 
  {path:"admindash",component:AdmindashComponent},
  {path:"studdash",component:StuddashComponent},
  {path:"details",component:ExitdetailsComponent},
  {path:"view",component:ViewregComponent},
  {path:"about",component:ExitaboutComponent},
  {path:"home",component:ExithomeComponent},
  {path:"viewall",component:StudlistComponent},
  {path:"course",component:StudcourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
