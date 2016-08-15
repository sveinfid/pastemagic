import {provideRouter, RouterConfig} from '@angular/router';
import {Home} from './home';
import {About} from './about';
import {Pastemagic} from './pastemagic';

export const routes: RouterConfig = [
  {path: '', component: Home},
  {path: 'about', component: About},
  {path: 'pastemagic', component: Pastemagic}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
