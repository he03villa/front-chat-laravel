import { inject, Injectable } from '@angular/core';
import { ServiceService } from './service.service';
import { DataService } from './data.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private _data:DataService = inject(DataService);
  private _service:ServiceService = inject(ServiceService);

  constructor() { }

  sendMessage(data:any) {
    const url = `${ environment.urlApi }${ environment.api.message.name }/${ environment.api.message.services.send }`;
    return this._service.promet(this._data.metodoPost(url, data));
  }
}
