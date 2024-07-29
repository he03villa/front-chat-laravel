import { Component, inject } from '@angular/core';
import Echo from 'laravel-echo';
import { ChatService } from 'src/app/service/chat.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  echo:Echo = new Echo({
    broadcaster: 'reverb',
    key: environment.VITE_REVERB_APP_KEY,
    wsHost: environment.VITE_REVERB_HOST,
    wsPort: environment.VITE_REVERB_PORT,
    wssPort: environment.VITE_REVERB_PORT,
    forceTLS: (environment.VITE_REVERB_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
    authEndpoint: `${environment.urlApi}broadcasting/auth`,
    auth: {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${ localStorage.getItem('token') }`
      }
    }
  });

  arrayUsers:any = [];
  message:string = '';
  arrayMessage:any = [];
  private _message: ChatService = inject(ChatService);

  constructor() {
    this.echo.private('channel-chat').listen('chatEvent', (resp:any) => {
      console.log(resp);
      this.arrayMessage.push({ message: resp.message, me: false });
    });
    this.echo.join(`channel-chat`)
    .here((users:any) => {
        // ...
        console.log(users);
        this.arrayUsers = users;
    })
    .joining((user:any) => {
        console.log(user.name);
        this.arrayUsers.push(user);
    })
    .leaving((user:any) => {
        console.log(user.name);
        this.arrayUsers = this.arrayUsers.filter((f:any) => user.id != f.id);
    })
    .error((error:any) => {
        console.error(error);
    });
  }

  async sendMensaje() {
    console.log(this.message);
    const res:any = await this._message.sendMessage({ message: this.message });
    this.arrayMessage.push({ message: this.message, me: true });
    console.log(res);
  }
 }
