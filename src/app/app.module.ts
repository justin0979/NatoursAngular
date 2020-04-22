import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeadersModule } from "./headers/headers.module";
import { ComponentsModule } from "./components/components.module";
import { AboutModule } from "./about/about.module";
import { FeaturesModule } from "./features/features.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeadersModule,
    ComponentsModule,
    AboutModule,
    FeaturesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
