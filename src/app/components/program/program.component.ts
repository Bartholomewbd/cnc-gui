import { Component, OnInit } from "@angular/core";
import { ProgramEntriesService } from "src/app/services/program-entries.service";

import { Entry } from "../../models/entry";
import { Coordinate } from "../../models/coordinate";
import { ConditionalExpr } from "@angular/compiler";

@Component({
  selector: "app-program",
  templateUrl: "./program.component.html",
  styleUrls: ["./program.component.css"]
})
export class ProgramComponent implements OnInit {
  entries: Entry[];

  x: number = 0;
  y: number = 0;

  coordinates = [{ x: 0, y: 0 }];

  constructor(public programEntriesService: ProgramEntriesService) {}

  ngOnInit() {
    //grab the entries in the DB for the program
    this.programEntriesService.getEntries().subscribe(entries => {
      this.entries = entries;
    });

    this.programEntriesService.getEntries().subscribe(() => {
      this.buildCoordinates();
    });
  }

  //delete the specific entry from the UI and the database.
  deleteEntry(entry: Entry) {
    //delete single program entry from UI
    this.entries = this.entries.filter(e => e.id !== entry.id);
    //delete single program entry from the DB
    this.programEntriesService.deleteEntry(entry).subscribe();
  }

  //create array of coordinates from the entries
  buildCoordinates(): any {
    this.entries.forEach(e => {
      switch (e.title) {
        case "CutMoveNorth":
          this.x = this.x;
          this.y += e.cutLength;
          break;
        case "CutMoveSouth":
          this.x = this.x;
          this.y -= e.cutLength;
          break;
        case "CutMoveEast":
          this.x += e.cutLength;
          this.y = this.y;
          break;
        case "CutMoveWest":
          this.y -= e.cutLength;
          this.y = this.y;
          break;
        case "SetCutLocation":
          this.x = e.xCoordinate;
          this.y = e.yCoordinate;
          break;
      }

      this.coordinates.push({ x: this.x, y: this.y });
    });
  }

  runProgram() {}
}
