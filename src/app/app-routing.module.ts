import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { 
    path: 'customers', 
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        preloadingStrategy: PreloadAllModules
      }
    ), 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Lazy Loading
// Only download and load the components/modules when you navigate to them
// The apps initial load time is faster

// Preloading
// Downloads the components/elements in the background, instead of only when you navigate

// Resolvers
// Block the page from displaying until everything has been loaded
// The resolver service resolve() method is executed before navigation, we load data we need here
// We can then inject this service into the component and access this data in the component
// We don't need to initialize values in the component, just define them