import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerResolverService } from '../resolvers/customer-resolver.service';

import { CustomersComponent } from './customers.component';


const routes: Routes = [
  { 
    path: '', 
    component: CustomersComponent,
    resolve: {
      crisis: CustomerResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
