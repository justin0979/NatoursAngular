import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoriesHomeComponent } from "./stories-home/stories-home.component";
import { ComponentsModule } from "../components/components.module";
import { StoryComponent } from "./story/story.component";

@NgModule({
  declarations: [StoriesHomeComponent, StoryComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [StoriesHomeComponent, StoryComponent],
})
export class StoriesModule {}
