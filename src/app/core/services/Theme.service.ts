import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private currentTheme = new BehaviorSubject<string>('lara-light-blue');
    theme$ = this.currentTheme.asObservable();

    constructor(@Inject(DOCUMENT) private document: Document) {}

    switchTheme(theme: string) {
        const themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

        if (themeLink) {
            themeLink.href = `${theme}.css`;
        }

        this.document.body.classList.remove('lara-light-blue', 'lara-dark-blue');
        this.document.body.classList.add(theme); 
        this.currentTheme.next(theme);
    }
}
