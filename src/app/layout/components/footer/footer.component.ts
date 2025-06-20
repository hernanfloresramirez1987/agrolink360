import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-footer',
  imports: [NgClass],
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
