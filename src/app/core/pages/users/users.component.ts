import { NgClass } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { ThemeService } from '../../../layout/services/theme.service';

@Component({
  selector: 'app-users',
  imports: [NgClass],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export default class UsersComponent {
  incolorTheme = signal<string>('');

  usuarios = [
    { nombre: 'Juan', email: 'juan@example.com', rol: 'Admin' },
    { nombre: 'Ana', email: 'ana@example.com', rol: 'Usuario' }
  ];
  
  constructor(private themeService: ThemeService) {
    effect(() => {
      this.incolorTheme.set(this.themeService.theme())
    })
  }
}
