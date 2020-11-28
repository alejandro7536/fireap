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
  public operador: any;
  public precio = 0;
  public nombre: string;

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

  getProductosByPrecio() {
    console.log(this.operador, this.precio);
    this.productoService.getProductosByprecio(this.operador, this.precio).subscribe(
      (prod: Producto[]) => {
        console.log(prod);
        this.productos = prod;
      }
    );

  }

  getProductoByNombre() {
    if (this.nombre) {
      this.productoService.getProductosByNombre(this.nombre).subscribe(
        (prod: Producto[]) => {
          console.log(prod);
          this.productos = prod;
        }
      );
    } else {
      this.ngOnInit();
    }
  }

}
