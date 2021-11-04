import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

export interface Data {
  customer: Customer;
}
export interface Customer {
  id: number;
  name: string;
}

export class CustomerResolverService implements Resolve<Customer> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Customer> | Customer {
    const customer: Customer = { id: 1, name: 'test name' };
    return of(customer);
  }
}