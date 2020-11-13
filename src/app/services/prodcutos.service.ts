import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdcutosService {

  constructor(
    private af: AngularFirestore
  ) { }

  getProductos() {
    return this.af.collection('productos').valueChanges();
  }
}
