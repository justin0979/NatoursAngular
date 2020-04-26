import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"],
})
export class VideoComponent implements OnInit {
  @Input() videoMp4: string;
  @Input() videoWebm: string;

  constructor() {}

  ngOnInit(): void {}
}
