export const environment = {
    production: false,
    urlApi: 'http://localhost/chat-laravel/api-chat-laravel/public/api/',
    urlBase: 'http://localhost/chat-laravel/api-chat-laravel/public/',
    VITE_REVERB_APP_KEY: 'tuynepxc8uuugd6agtx4',
    VITE_REVERB_PORT: '8080',
    VITE_REVERB_HOST: 'localhost',
    VITE_REVERB_SCHEME: 'REVERB_SCHEME',
    api: {
        auth: {
            name: 'auth',
            services: {
                login: 'login',
                register: 'register',
                me: 'me'
            }
        },
        message: {
            name: 'message',
            services: {
                send: 'send'
            }
        }
    }
};
