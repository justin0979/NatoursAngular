import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutHomeComponent } from "./about-home/about-home.component";
import { ImagesComponent } from "./images/images.component";
import { ComponentsModule } from "../components/components.module";
import { ContentComponent } from "./content/content.component";

@NgModule({
  declarations: [AboutHomeComponent, ImagesComponent, ContentComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [AboutHomeComponent, ImagesComponent, ContentComponent],
})
export class AboutModule {}
