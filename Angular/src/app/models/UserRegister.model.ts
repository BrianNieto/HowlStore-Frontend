import {PersonaModel} from "./Persona.model";

export class UserRegisterModel {
  constructor(public mail:string, public password:string, public persona:PersonaModel) {
  }
}
