import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tours-home",
  templateUrl: "./tours-home.component.html",
  styleUrls: ["./tours-home.component.scss"],
})
export class ToursHomeComponent implements OnInit {
  cards = ["card", "card2", "card3"];

  constructor() {}

  ngOnInit(): void {}
}
