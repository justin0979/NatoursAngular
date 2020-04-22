import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-headings",
  templateUrl: "./headings.component.html",
  styleUrls: ["./headings.component.scss"],
})
export class HeadingsComponent implements OnInit {
  @Input() type: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() headingClass: string;

  constructor() {}

  ngOnInit(): void {}
}
