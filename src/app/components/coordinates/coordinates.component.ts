import { Component, Input } from "@angular/core";
import { Coordinate } from "../../models/coordinate";

@Component({
  selector: "app-coordinates",
  templateUrl: "./coordinates.component.html",
  styleUrls: ["./coordinates.component.css"]
})
export class CoordinatesComponent {
  @Input() coordinates: Coordinate[];

  currentCoordinates: Coordinate = { x: 0, y: 0 };

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
