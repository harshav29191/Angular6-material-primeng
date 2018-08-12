import { Component, OnInit } from '@angular/core';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { NgModule } from '@angular/core';
import { CustomMaterialDesignModule } from '../shared/custom-material-design.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    CustomerDetailsComponent

  ],
  
  imports: [
    CustomMaterialDesignModule
  ],
  exports: [
    CustomMaterialDesignModule
  ],
  
})
export class CustomerModule{

}
