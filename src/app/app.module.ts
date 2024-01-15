import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExitRegComponent } from './exit-reg/exit-reg.component';
import { ExitenquiryComponent } from './exitenquiry/exitenquiry.component';
import { ExithomeComponent } from './exithome/exithome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExitdetailsComponent } from './exitdetails/exitdetails.component';
import { ExitaboutComponent } from './exitabout/exitabout.component';
import { ExitadminComponent } from './exitadmin/exitadmin.component';
// import { ExitstudComponent } from './exitstud/exitstud.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { StuddashComponent } from './studdash/studdash.component';
import { StudlistComponent } from './studlist/studlist.component';
import { StudcourseComponent } from './studcourse/studcourse.component';
import { CondactComponent } from './condact/condact.component';
import { ViewregComponent } from './viewreg/viewreg.component';



@NgModule({
  declarations: [
    AppComponent,
    ExitRegComponent,
    ExitenquiryComponent,
    ExithomeComponent,
    NavbarComponent,
    ExitdetailsComponent,
    ExitaboutComponent,
    ExitadminComponent,
    // ExitstudComponent,
    AdmindashComponent,
    StuddashComponent,
    StudlistComponent,
    StudcourseComponent,
    CondactComponent,
    ViewregComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(myroutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
