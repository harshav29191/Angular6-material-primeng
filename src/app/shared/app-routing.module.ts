
import { NgModule } from '@angular/core';
import { CustomerCreateComponent }  from '../customer/customer-create/customer-create.component';
import { CustomerListComponent } from  '../customer/customer-list/customer-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CommercialComponent } from '../commercial/commercial.component';


const routes: Routes = [
  { path: 'create', component: CustomerCreateComponent },
  { path: 'list', component: CustomerListComponent },
  { path: "", component: CustomerListComponent},
  { path: "commercial", component: CommercialComponent},
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

