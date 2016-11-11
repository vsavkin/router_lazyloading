import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MenuCmp} from './menu_cmp';

export const MENU_ROUTES = [
  { path: '', component: MenuCmp }
];

@NgModule({
  imports: [RouterModule],
  declarations: [MenuCmp]
})
export class MenuModule {}