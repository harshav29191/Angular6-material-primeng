import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './shared/app-routing.module';

import {FormsModule} from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CustomerModule } from './customer/customer.module';
import { CommercialComponent } from './commercial/commercial.component';

	
@NgModule({
  declarations: [
    AppComponent,
    CommercialComponent

   
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
