import { Component, OnInit, Input } from "@angular/core";
import { Entry } from "src/app/models/entry";

@Component({
  selector: "app-coordinates",
  templateUrl: "./coordinates.component.html",
  styleUrls: ["./coordinates.component.css"]
})
export class CoordinatesComponent implements OnInit {
  @Input() entry: Entry;
  x: number = 0;
  y: number = 0;

  coordinates = `X: ${this.x} Y: ${this.y}`;

  constructor() {}

  ngOnInit() {}

  updateCoordinates(entry: Entry) {
    switch (entry.title) {
      case "CutMoveNorth":
        return (entry.yCoordinate -= 1);
      case "CutMoveSouth":
        return (entry.yCoordinate -= 1);
      case "CutMoveEast":
        return (entry.xCoordinate += 1);
      case "CutMoveWest":
        return (entry.yCoordinate -= 1);
    }
  }
}
