import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeThemeService {

  themeselection: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    let theme = window.localStorage.getItem("theme");
    if (theme) {
      this.themeselection = theme === 'dark';
      this.changeTheme(this.themeselection);
    }
  }

  changeTheme(state: boolean) {
    let theme = state ? 'dark' : 'light';
    window.localStorage.setItem("theme", theme);
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `lara-${theme}-blue.css`;
    }
  }
}
