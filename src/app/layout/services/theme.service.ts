import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _theme = signal<'green' | 'slate'>('green');

  // getter para la señal (read-only)
  get theme() {
    return this._theme;
  }

  setTheme(theme: 'green' | 'slate') {
    this._theme.set(theme);
  }
}
