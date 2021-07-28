import { Component, OnInit } from "@angular/core";
import { Factura } from "./factura.model";
import { Item } from "./item.model";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-factura",
  templateUrl: "./factura.component.html",
  styleUrls: ["./factura.component.css"],
})
export class FacturaComponent implements OnInit {
  facturas: Factura[] = [];
  items: Item[] = [];
  nombre = "";
  precio = 0;
  siExisten: boolean = true;
  cliente = "";
  fecha = "";
  closeModal: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  triggerModal(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (res) => {
          this.closeModal = `Closed with: ${res}`;
        },
        (res) => {
          this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  agregarFactura() {
    try {
      let factura = new Factura(
        this.facturas.length + 1,
        this.cliente,
        this.fecha,
        []
      );
      this.facturas.push(factura);
      this.siExisten = false;
    } catch (e) {
      console.log("An error ocurred on Agregar Item =>", e);
    }
  }

  agregarItem(id: number) {
    try {
      if (this.nombre != "" && this.precio != 1) {
        let item = new Item(this.nombre, this.precio, id);
        this.facturas[id].items.push(item);
        this.siExisten = false;
      }
      return;
    } catch (e) {
      console.log("An error ocurred on Agregar Item =>", e);
    }
  }

  headElements = ["ID", "Cliente", "Fecha", "", "items"];
  headElements2 = ["Nombre", "Precio"];
}
