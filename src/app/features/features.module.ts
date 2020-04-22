import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ComponentsModule } from "../components/components.module";
import { FeaturesHomeComponent } from "./features-home/features-home.component";
import { FeaturesCardComponent } from "./features-card/features-card.component";

@NgModule({
  declarations: [FeaturesHomeComponent, FeaturesCardComponent],
  imports: [CommonModule, SharedModule, ComponentsModule],
  exports: [FeaturesHomeComponent],
})
export class FeaturesModule {}
