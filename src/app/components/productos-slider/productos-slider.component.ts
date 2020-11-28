import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';

import swiper from 'swiper/bundle';

@Component({
  selector: 'app-productos-slider',
  templateUrl: './productos-slider.component.html',
  styleUrls: ['./productos-slider.component.css']
})
export class ProductosSliderComponent implements AfterViewInit {

  @Input() productos: Producto[] = [];
  ancho: number;
  elementos: number;

  constructor() {
    this.calcularElementos();
   }

  calcularElementos() {
    this.ancho = document.body.clientWidth;
    if (this.ancho < 400) {
      this.elementos = 1.2;
    } else {
      this.elementos = 5;
    }
  }


  ngAfterViewInit(): void {
    const mySwiper = new swiper('.swiper-container', {
      loop: true,
      autoplay: true,
      slidesPerView: this.elementos,
      spaceBetween: 15,
    });
  }

}
