import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeadingsComponent } from "./headings/headings.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { VideoComponent } from "./video/video.component";

@NgModule({
  declarations: [HeadingsComponent, ButtonsComponent, VideoComponent],
  imports: [CommonModule],
  exports: [HeadingsComponent, ButtonsComponent, VideoComponent],
})
export class ComponentsModule {}
