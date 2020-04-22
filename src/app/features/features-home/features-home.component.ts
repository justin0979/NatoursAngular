import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-features-home",
  templateUrl: "./features-home.component.html",
  styleUrls: ["./features-home.component.scss"],
})
export class FeaturesHomeComponent implements OnInit {
  features = [
    {
      title: "Explore the world",
      text:
        "Lorem ipsum dolor sit amet consectetur  elit. Essevero quis exercitationem tenetur ratione dignissimos, similique",
      icon: "icon-basic-world",
    },
    {
      title: "Meet Nature",
      text:
        "Lorem ipsum dollit. Essevero quis exercadipisicingitationem tenetur ratione dignissimos, similique",
      icon: "icon-basic-compass",
    },
    {
      title: "Find your way",
      text:
        "Lorem ipsum dolor sit amet  adipisicing elit. Essevero quis exercitationem tenetur ratione dignissimos, similique",
      icon: "icon-basic-map",
    },
    {
      title: "live a healthier life",
      text:
        "  dolor sit amet consectetur adipisicing elit. Essevero quis exercitationem tenetur ratione dignissimos, similique",
      icon: "icon-basic-heart",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
