import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-story",
  templateUrl: "./story.component.html",
  styleUrls: ["./story.component.scss"],
})
export class StoryComponent implements OnInit {
  @Input() storyName: string;
  @Input() storyTitle: string;
  @Input() storyText: string;
  @Input() storyImage: string;

  constructor() {}

  ngOnInit(): void {}
}
