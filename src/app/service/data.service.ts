import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _http:HttpClient = inject(HttpClient);

  constructor() { }

  metodoGet(url:string) {
    return this._http.get(url);
  }

  metodoPost(url:string, data:any) {
    const header = {
      headers: new HttpHeaders()
    };
    header.headers.set('Content-Type', 'application/json; charset=utf-8');
    const token = localStorage.getItem('token') || '';
    if (token != '') {
      header.headers = header.headers.append('Authorization', `Bearer ${ token }`);
    }
    return this._http.post(url, data, header);
  }
}
