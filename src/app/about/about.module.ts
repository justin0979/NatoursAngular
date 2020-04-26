import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutHomeComponent } from "./about-home/about-home.component";
import { ComponentsModule } from "../components/components.module";
import { ContentComponent } from "./content/content.component";

@NgModule({
  declarations: [AboutHomeComponent, ContentComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [AboutHomeComponent, ContentComponent],
})
export class AboutModule {}
