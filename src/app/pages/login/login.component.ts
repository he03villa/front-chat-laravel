import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form:FormGroup = new FormGroup({});
  private fb:FormBuilder = new FormBuilder();
  private _user:AuthService = inject(AuthService);
  private _service:ServiceService = inject(ServiceService);

  constructor() {
    this.form = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  async login() {
    const data = this.form.getRawValue();
    const res:any = await this._user.login(data);
    localStorage.setItem('token', res.access_token);
    localStorage.setItem('dataUser', JSON.stringify(res.user));
    console.log(res);
    this._service.url('chat');
  }
}
