import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
})
export class ContentComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;

  constructor() {}

  ngOnInit(): void {}
}
