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
      text: 'Conectando al productor con el mercado y las industrias',
      //agrandar el tamano de la letra
      textStyle: 'text-4xl font-bold',
      //centrar el texto
      textAlign: 'center',
      //color del texto
      textColor: 'white',
      //color del fondo
      backgroundColor: 'black',
    },
    {
      image: 'imgs/banners/banner-2.jpg',
      title: 'La mejor plataforma para tu negocio',
      text: 'Descubra el futuro de la agricultura.',
    },
    {
      image: 'imgs/banners/banner-3.jpg',
      title: 'Conectando al productor con el mercado y las industrias',
      text: 'La red que une al productor con supermercados, tiendas y más.',
    }
  ];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.banners.length) % this.banners.length;
  }
}