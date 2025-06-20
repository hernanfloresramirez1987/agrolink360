import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  // banners = [
  //   { image: 'assets/banner1.jpg', title: 'Agrolink 360', text: 'Soluciones para el agro' },
  //   { image: 'assets/banner2.jpg', title: 'Productores conectados', text: 'Lleva tu producción al mundo' },
  //   { image: 'assets/banner3.jpg', title: 'Transporte seguro', text: 'Logística eficiente y confiable' }
  // ];
  
  // currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 2500); // cambia cada 5 segundos
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.banners.length) % this.banners.length;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


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

  // nextSlide() {
  //   this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  // }

  // prevSlide() {
  //   this.currentIndex = (this.currentIndex - 1 + this.banners.length) % this.banners.length;
  // }
}