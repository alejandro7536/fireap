import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { ProdcutosService } from '../../services/prodcutos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public productos: Producto[] = [];

  constructor(
    private productoService: ProdcutosService
  ) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      (prod: Producto[]) => {
        this.productos = prod;
        console.log(prod);
      }
    );
  }

}
