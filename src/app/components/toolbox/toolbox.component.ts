import { Component, OnInit } from "@angular/core";
import { ProgramEntriesService } from "src/app/services/program-entries.service";

import { Entry } from "../../models/entry";

@Component({
  selector: "app-toolbox",
  templateUrl: "./toolbox.component.html",
  styleUrls: ["./toolbox.component.css"]
})
export class ToolboxComponent implements OnInit {
  entries: Entry[];

  constructor(public _programEntriesService: ProgramEntriesService) {}
  ngOnInit() {}

  addEntry(entry: Entry) {
    this._programEntriesService.addEntry(entry).subscribe(entry => {
      this.entries.push(entry);
    });
  }
}
