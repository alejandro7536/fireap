SELECT * FROM PRODUCTOS WHERE PRECIO = 100;

  getProductosByprecio(operador: '<' | '>' | '==', precio: number) {
    return this.af.collection('productos', ref => ref.where('precio', operador, precio ));

  }


SELECT * FROM PRODUCTOS WHERE NOMBRE = 'NOMBRE DEL PRODUCTO'

  getProductosByNombre(nombre: string) {
    return this.af.collection('productos', ref => ref.where('nombre', '==', nombre ));
  }
