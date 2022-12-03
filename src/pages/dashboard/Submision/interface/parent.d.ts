export interface IParent {
  fullNameParent: string;
  uniqueParent: boolean;
  addressParent: string;
  convivencia: boolean;
  typeParent: TypeParent.MADRE | TypeParent.PADRE | TypeParent.TUTOR;
  phoneNumberParent: string;
  occupation?: [Ocupation.TRABAJADOR | Ocupation.JUBILADO | Ocupation.ASISTENCIADO] | [];
  work: string;
  workAddress: string;
  workPosition: string;
  organismo: string;
  workPhoneParent: string;
  horario: string;
  salary: number;
  otherChildren: boolean;
  cantOtherChildren: number;
  ciOtherChildren: string;
  pregnant: boolean;
  student: boolean;
  deaf: boolean;
}

export enum TypeParent {
  MADRE = 'madre',
  PADRE = 'padre',
  TUTOR = 'tutor',
}

export enum Ocupation {
  TRABAJADOR = 'trabajador',
  JUBILADO = 'jubilado',
  ASISTENCIADO = 'asistenciado',
}
