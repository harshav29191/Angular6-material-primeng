import { Component, OnInit, NgModule } from '@angular/core';


import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialDesignModule } from './custom-material-design.module';
import { HttpClientModule } from '@angular/common/http';


  @NgModule({
    declarations: [
        FooterComponent,HeaderComponent,SidenavComponent
    ],  
    imports: [
      CustomMaterialDesignModule,BrowserAnimationsModule
    ],
    exports: [
        CustomMaterialDesignModule,HttpClientModule,BrowserAnimationsModule,FooterComponent,HeaderComponent,SidenavComponent
    ],
    
  })
  export class SharedModule  {
  
  }
  