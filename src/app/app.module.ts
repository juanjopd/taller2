import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { FacturaComponent } from "./factura/factura.component";
import { ClienteComponent } from "./cliente/cliente.component";

@NgModule({
  declarations: [AppComponent, FacturaComponent, ClienteComponent],
  imports: [BrowserModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
