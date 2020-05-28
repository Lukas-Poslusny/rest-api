import {Image} from './Image.model';

export class Product {
  constructor(public id: number, public title: string, public description: string, public unitsOnStock: number, public price: number, public images: Image[], public parameters: string){}
}
