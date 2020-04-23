import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-tour-card",
  templateUrl: "./tour-card.component.html",
  styleUrls: ["./tour-card.component.scss"],
})
export class TourCardComponent implements OnInit {
  @Input() num: string;

  constructor() {}

  ngOnInit(): void {}
}
