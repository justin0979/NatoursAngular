import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-features-card",
  templateUrl: "./features-card.component.html",
  styleUrls: ["./features-card.component.scss"],
})
export class FeaturesCardComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() icon: string;

  constructor() {}

  ngOnInit(): void {}
}
