import { Component, OnInit } from "@angular/core";
import { ProgramEntriesService } from "src/app/services/program-entries.service";

import { Entry } from "../../models/entry";

@Component({
  selector: "app-program",
  templateUrl: "./program.component.html",
  styleUrls: ["./program.component.css"]
})
export class ProgramComponent implements OnInit {
  entries: Entry[];

  constructor(public _programEntriesService: ProgramEntriesService) {}

  ngOnInit() {
    //Grab the entries in the DB for the program
    this._programEntriesService.getEntries().subscribe(entries => {
      this.entries = entries;
    });
  }

  deleteEntry(entry: Entry) {
    //delete single program entry from UI
    this.entries = this.entries.filter(e => e.id !== entry.id);
    //delete single program entry from the DB
    this._programEntriesService.deleteEntry(entry).subscribe();
  }
}
