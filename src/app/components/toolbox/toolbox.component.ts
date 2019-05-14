import { Component } from "@angular/core";
import { ProgramEntriesService } from "src/app/services/program-entries.service";

import { Entry } from "../../models/entry";
import { DimensionsService } from "src/app/services/dimensions.service";
import { Dimensions } from "src/app/models/dimensions";

@Component({
  selector: "app-toolbox",
  templateUrl: "./toolbox.component.html",
  styleUrls: ["./toolbox.component.css"]
})
export class ToolboxComponent {
  entries: Entry[];
  dimensions: Dimensions[];

  constructor(
    public programEntriesService: ProgramEntriesService,
    public dimensionsService: DimensionsService
  ) {}

  addEntry(entry: Entry) {
    this.programEntriesService.addEntry(entry).subscribe(entry => {
      this.entries.push(entry);
    });
  }

  addDimensions(dimensions: Dimensions) {
    this.dimensionsService.addDimensions(dimensions).subscribe(dimensions => {
      this.dimensions.pop();
      this.dimensions.push(dimensions);
    });
  }
}
