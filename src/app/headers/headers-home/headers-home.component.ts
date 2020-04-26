import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-headers-home",
  templateUrl: "./headers-home.component.html",
  styleUrls: ["./headers-home.component.scss"],
})
export class HeadersHomeComponent implements OnInit {
  @Input() title = "Add Your Main Title";
  @Input() subtitle = "And Your Sub Title";
  @Input() btnText = "Add your stuff here too";

  constructor() {}

  ngOnInit(): void {}
}
