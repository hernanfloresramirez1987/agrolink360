import { CommonModule, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrums',
  imports: [NgClass, CommonModule, RouterLink],
  templateUrl: './breadcrums.component.html',
  styleUrl: './breadcrums.component.css'
})
export class BreadcrumsComponent {
  private themeService = inject(ThemeService);
  colorTheme = this.themeService.theme;

  items: { label: string, url: string }[] = [
    { label: 'Inicio', url: '/' },
    { label: 'Usuarios', url: '/users' }
  ];


}
