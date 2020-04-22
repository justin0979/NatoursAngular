import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeadingsComponent } from "./headings/headings.component";
import { ButtonsComponent } from "./buttons/buttons.component";

@NgModule({
  declarations: [HeadingsComponent, ButtonsComponent],
  imports: [CommonModule],
  exports: [HeadingsComponent, ButtonsComponent],
})
export class ComponentsModule {}
