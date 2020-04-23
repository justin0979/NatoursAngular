import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tours-home",
  templateUrl: "./tours-home.component.html",
  styleUrls: ["./tours-home.component.scss"],
})
export class ToursHomeComponent implements OnInit {
  cards = [
    {
      tourTitle: "The Sea Explorer",
      tourLength: "3",
      tourSlots: "30",
      tourGuides: "2",
      tourAccomodation: "cozy hotels",
      tourDifficulty: "easy",
      tourPrice: "$297",
    },
    {
      tourTitle: "The forest hiker",
      tourLength: "7",
      tourSlots: "40",
      tourGuides: "6",
      tourAccomodation: "provided tents",
      tourDifficulty: "medium",
      tourPrice: "$497",
    },
    {
      tourTitle: "the snow adventure",
      tourLength: "5",
      tourSlots: "15",
      tourGuides: "3",
      tourAccomodation: "provided tents",
      tourDifficulty: "hard",
      tourPrice: "$897",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
