import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimesDirective } from "./shared/times.directive";

@NgModule({
  declarations: [TimesDirective],
  imports: [CommonModule],
  exports: [TimesDirective],
})
export class SharedModule {}
