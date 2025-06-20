import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  incolorTheme = input.required<string>();
  intoggleSidebar = input<boolean>(false);
  outcolorTheme = output<boolean>();
  outbtnSidebar = output<boolean>();

  onToggleTheme = () => {
    const color = this.incolorTheme() === 'green';
    this.outcolorTheme.emit(color);
  }

  onToggleSidebar() { 
    this.outbtnSidebar.emit(!this.intoggleSidebar());
  }
}
