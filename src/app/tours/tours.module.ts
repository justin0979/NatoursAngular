import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ComponentsModule } from "../components/components.module";
import { ToursHomeComponent } from "./tours-home/tours-home.component";
import { TourCardComponent } from './tour-card/tour-card.component';

@NgModule({
  declarations: [ToursHomeComponent, TourCardComponent],
  imports: [CommonModule, SharedModule, ComponentsModule],
  exports: [ToursHomeComponent],
})
export class ToursModule {}
