import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeadersHomeComponent } from "./headers-home/headers-home.component";
import { ComponentsModule } from "../components/components.module";

@NgModule({
  declarations: [HeadersHomeComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [HeadersHomeComponent],
})
export class HeadersModule {}
