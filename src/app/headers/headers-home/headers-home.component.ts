import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-headers-home",
  templateUrl: "./headers-home.component.html",
  styleUrls: ["./headers-home.component.scss"],
})
export class HeadersHomeComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;

  constructor() {}

  ngOnInit(): void {}
}
