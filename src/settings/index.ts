import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SettingsCmp } from './settings_cmp';
import { PageSizeCmp } from './page_size_cmp';

export const SETTINGS_ROUTES = [
  { path: '', component: SettingsCmp },
  { path: 'pagesize', component: PageSizeCmp }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SETTINGS_ROUTES)
  ],
  declarations: [SettingsCmp, PageSizeCmp]
})
export class SettingsModule { }