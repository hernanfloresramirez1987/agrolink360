import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  currentIndex = 0;

  banners = [
    {
      image: 'imgs/banners/banner-1.jpg',
      title: 'AgroLink360',
      text: 'Join us in Denver from June 7 – 9 to see what’s coming next.',
    },
    {
      image: 'imgs/banners/banner-2.jpg',
      title: 'La mejor plataforma para tu negocio',
      text: 'Discover the future of agriculture.',
    },
    {
      image: 'imgs/banners/banner-3.jpg',
      title: 'Conectando al productor con el mercado',
      text: 'Learn about innovations in sustainability.',
    }
  ];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.banners.length) % this.banners.length;
  }
}