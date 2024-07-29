import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private _router:Router = inject(Router);

  constructor() { }

  url(url:string) {
    this._router.navigate([url]);
  }

  promet(res:Observable<any>) {
    return new Promise((resolve, reject) => {
      res.subscribe(success => resolve(success), err => resolve(err))
    });
  }
}
