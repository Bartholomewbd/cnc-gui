import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Entry } from "src/app/models/entry";

@Component({
  selector: "app-program-entry",
  templateUrl: "./program-entry.component.html",
  styleUrls: ["./program-entry.component.css"]
})
export class ProgramEntryComponent implements OnInit {
  @Input() entry: Entry;
  @Output() deleteEntry: EventEmitter<Entry> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  //set dynamic classes
  setClasses() {
    let classes = {
      entry: true,
      "is-complete": this.entry.completed
    };

    return classes;
  }

  onDelete(entry) {
    this.deleteEntry.emit(entry);
  }
}
