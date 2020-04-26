import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-stories-home",
  templateUrl: "./stories-home.component.html",
  styleUrls: ["./stories-home.component.scss"],
})
export class StoriesHomeComponent implements OnInit {
  stories = [
    {
      storyName: "Mary Smith",
      storyImage: "assets/nat-8.jpg",
      storyTitle: "I had the best week ever with my family",
      storyText:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto nesciunt vel obcaecati in doloremque, illo ad      laudantium numquam vero voluptatem aut blanditiis quos ab quis esse sint earum tenetur.",
    },
    {
      storyName: "Jack Wilson",
      storyImage: "assets/nat-9.jpg",
      storyTitle: "WOW! my life is completely different now",
      storyText:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto nesciunt vel obcaecati in doloremque, illo ad      laudantium numquam vero voluptatem aut blanditiis quos ab quis esse sint earum tenetur.",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
