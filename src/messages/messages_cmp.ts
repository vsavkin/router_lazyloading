import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Message, Repository} from '../repository';

@Component({
  selector: 'message-cmp',
  template: `
    <h1>Messages</h1>
    <ul>
      <li *ngFor="let m of messages">
        {{m.id}} - <a routerLink="/messages/{{folder}}/{{m.id}}">{{m.text}}</a>
      </li>
    </ul>
    <a routerLink="/settings/pagesize">Change Page Size</a>
    <a routerLink="/">Back</a>
  `
})
export class MessagesCmp {
  folder: string;
  messages: Message[];

  constructor(route: ActivatedRoute, repository: Repository) {
    this.folder = route.snapshot.params['folder'];
    this.messages = repository.messagesFor(this.folder);
  }
}