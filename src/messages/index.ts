import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MessageCmp} from './message_cmp';
import {MessagesCmp} from './messages_cmp';

export const MESSAGES_ROUTES = [
  { path: ':folder', component: MessagesCmp },
  { path: ':folder/:id', component: MessageCmp }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(MESSAGES_ROUTES)],
  declarations: [MessageCmp, MessagesCmp],
})
export class MessagesModule {}
