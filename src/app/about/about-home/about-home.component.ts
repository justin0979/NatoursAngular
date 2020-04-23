import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-about-home",
  templateUrl: "./about-home.component.html",
  styleUrls: ["./about-home.component.scss"],
})
export class AboutHomeComponent implements OnInit {
  @Input() title: string;

  images = [
    {
      src: "assets/nat-1-large.jpg",
      alt: "Photo 1",
      class: "composition__photo composition__photo--p1",
    },
    {
      src: "assets/nat-2-large.jpg",
      alt: "Photo 2",
      class: "composition__photo composition__photo--p2",
    },
    {
      src: "assets/nat-3-large.jpg",
      alt: "Photo 3",
      class: "composition__photo composition__photo--p3",
    },
  ];

  content = [
    {
      title: "You're going to fall in love with nature",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, fugiat laborum totam labore cum a porro similique, saepe impedit et ab dolores exercitationem aut? Fugiat fuga optio repellat alias eum.  ",
    },
    {
      title: "Live like you never have before",

      text:
        "Voluptates, fugiat laborum totam labore cum a porro similique, saepe impedit et ab dolores exercitationem aut? Fugiat fuga optio repellat alias eum.  ",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  mouseOver() {
    console.log("hover");
  }
}
