import { inject, Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ServiceService } from './service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _data:DataService = inject(DataService);
  private _service:ServiceService = inject(ServiceService);

  constructor() { }

  login(data:any) {
    const url = `${ environment.urlApi }${ environment.api.auth.name }/${ environment.api.auth.services.login }`;
    return this._service.promet(this._data.metodoPost(url, data));
  }

  register(data:any) {
    const url = `${ environment.urlApi }${ environment.api.auth.name }/${ environment.api.auth.services.register }`;
    return this._service.promet(this._data.metodoPost(url, data));
  }
}
