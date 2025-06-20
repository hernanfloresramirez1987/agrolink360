import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private themeService = inject(ThemeService);
  colorTheme = this.themeService.theme;

  toggleTheme(e: boolean) {
    const current = this.colorTheme();
    console.log(current);
    this.themeService.setTheme(e === true ? 'slate' : 'green');
  }
}
