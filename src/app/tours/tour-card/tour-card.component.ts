import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-tour-card",
  templateUrl: "./tour-card.component.html",
  styleUrls: ["./tour-card.component.scss"],
})
export class TourCardComponent implements OnInit {
  @Input() num: string;
  @Input() title: string;
  @Input() length: string;
  @Input() slots: string;
  @Input() accomodation: string;
  @Input() difficulty: string;
  @Input() guides: string;
  @Input() price: string;

  constructor() {}

  ngOnInit(): void {}
}
