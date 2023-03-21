import {PersonaModel} from "./Persona.model";

export class UserCompleteModel {

  constructor(public mail:string, public password:string, public persona:PersonaModel) {
  }
}
