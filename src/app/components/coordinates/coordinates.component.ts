import { Component, OnInit, Input, Output } from "@angular/core";
import { Entry } from "src/app/models/entry";
import { Coordinate } from "../../models/coordinate";

@Component({
  selector: "app-coordinates",
  templateUrl: "./coordinates.component.html",
  styleUrls: ["./coordinates.component.css"]
})
export class CoordinatesComponent implements OnInit {
  @Input() coordinates: Coordinate[];

  currentCoordinates: Coordinate = { x: 0, y: 0 };

  constructor() {}

  ngOnInit() {}

  displayCoordinates() {
    return `X: ${this.currentCoordinates.x}, Y: ${this.currentCoordinates.y}`;
  }

  updateCurrentCoordinates() {
    this.coordinates.forEach((c, index) => {
      setTimeout(() => {
        this.currentCoordinates = c;
      }, 3000 * index);
    });
  }
}
