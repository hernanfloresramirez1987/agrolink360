import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumsComponent } from './components/breadcrums/breadcrums.component';

@Component({
  standalone: true,
  selector: 'app-layout',
  imports: [RouterOutlet, CommonModule, RouterModule, FormsModule, ReactiveFormsModule, HeaderComponent, FooterComponent, SidebarComponent, BreadcrumsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  private themeService = inject(ThemeService);
  // Obtener el tema como señal para usar en template con async pipe
  colorTheme = this.themeService.theme;
  sidebarOpen = signal(false);
  

  toggleTheme(e: boolean) {
    console.log(e);
    const current = this.colorTheme();
    this.themeService.setTheme(e === true ? 'slate' : 'green');
  }

  toggleSidebar(e: boolean) { console.log(e);
    this.sidebarOpen.update(open => !open);
    this.sidebarOpen.set(e)
  }
}
