import { Item } from "./item.model";

export class Factura {
  constructor(
    public id: number,
    public cliente: string,
    public fecha: string,
    public items: Item[]
  ) {}
}
