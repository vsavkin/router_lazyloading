import {Component} from '@angular/core';

@Component({
  selector: 'menu-cmp',
  template: `
    <h1>Messages</h1>
    <ul>
      <li><a routerLink="/messages/inbox">Inbox</a></li>
      <li><a routerLink="/messages/draft">Drafts</a></li>
      <li><a routerLink="/settings">Settings</a></li>
    </ul>
  `
})
export class MenuCmp {}