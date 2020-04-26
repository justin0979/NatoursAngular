import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeadersModule } from "./headers/headers.module";
import { ComponentsModule } from "./components/components.module";
import { AboutModule } from "./about/about.module";
import { FeaturesModule } from "./features/features.module";
import { ToursModule } from "./tours/tours.module";
import { StoriesModule } from "./stories/stories.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeadersModule,
    ComponentsModule,
    AboutModule,
    FeaturesModule,
    ToursModule,
    StoriesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
