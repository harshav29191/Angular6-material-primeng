import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AppRoutingModule } from './shared/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialDesignModule } from './shared/custom-material-design.module';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';


import {FormsModule} from '@angular/forms';
import { CommercialComponent } from './commercial/commercial.component';
	
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    CommercialComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialDesignModule,
    FormsModule,
    CustomerComponent

  ],
  exports: [
    CustomMaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
