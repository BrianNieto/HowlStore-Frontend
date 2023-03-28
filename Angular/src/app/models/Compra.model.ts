import {ItemModel} from "./Item.model";
import {UserCompleteModel} from "./UserComplete.model";

export class CompraModel{
  constructor(public comentario:string, public fecha:string , public estadoPedido:string, public item:ItemModel, public user:UserCompleteModel) {}
}
