import {ItemModel} from "./Item.model";

export class CompraModel{
  constructor(public comentario:string, public estadoPedido:string, public idItem:number, public idUser:number) {}
}
