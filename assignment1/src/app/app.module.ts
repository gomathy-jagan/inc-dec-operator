import { element } from "protractor";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OperatorincdecComponent } from "./operatorincdec/operatorincdec.component";
import { ParentcomponentComponent } from "./parentcomponent/parentcomponent.component";

@NgModule({
  declarations: [
    AppComponent,
    OperatorincdecComponent,
    ParentcomponentComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule {
 /*  constructor(private injector: Injector) {
    const customElement = createCustomElement(OperatorincdecComponent, {
      injector
    });
    customElements.define("increment-decrement", customElement);
  }

  ngDoBootstrap() {} */
}
