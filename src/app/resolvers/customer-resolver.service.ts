import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

/* An interface that represents your data model */
export interface Customer {
  id: number;
  name: string;
}

export class CustomerResolverService implements Resolve<string> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> | string {
    return 'test data';
  }
}