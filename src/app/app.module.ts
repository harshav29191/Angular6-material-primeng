import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AppRoutingModule } from './shared/app-routing.module';

import {FormsModule} from '@angular/forms';
import { CommercialComponent } from './commercial/commercial.component';
import { SharedModule } from './shared/shared.module';
import { CustomerModule } from './customer/customer.module';

	
@NgModule({
  declarations: [
    AppComponent,
    CommercialComponent,
    CustomerComponent
   
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CustomerModule

  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
