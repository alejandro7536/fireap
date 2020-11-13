import { Component, OnInit } from '@angular/core';
import { ProdcutosService } from '../../services/prodcutos.service';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productos: Producto[] = [];

  constructor(
    private productoService: ProdcutosService
  ) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      (prod: Producto[]) => {
        this.productos = prod;
      }
    );
  }

}
