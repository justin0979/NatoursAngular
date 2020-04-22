import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.scss"],
})
export class ButtonsComponent implements OnInit {
  @Input() href = "#";
  @Input() btnClass: string;
  @Input() text = "click me";
  @Input() animated = false;

  classes = [];

  constructor() {}

  ngOnInit(): void {}

  getClass() {
    if (this.animated) {
      this.classes.push("btn-animated");
    }

    return this.classes;
  }
}
