import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Entry } from "src/app/models/entry";

@Component({
  selector: "app-program-entry",
  templateUrl: "./program-entry.component.html",
  styleUrls: ["./program-entry.component.css"]
})
export class ProgramEntryComponent {
  @Input() entry: Entry;
  @Output() deleteEntry: EventEmitter<Entry> = new EventEmitter();

  //Correct the format based on whether the entry has coordinates or length
  formatEntry() {
    return !this.entry.cutLength
      ? `${this.entry.title}(X,Y) : ${this.entry.xCoordinate}, ${
          this.entry.yCoordinate
        }`
      : `${this.entry.title} : ${this.entry.cutLength}`;
  }

  //set dynamic classes
  setClasses() {
    let classes = {
      entry: true
    };

    return classes;
  }

  //Emit the event to delete the Entry
  onDelete(entry) {
    this.deleteEntry.emit(entry);
  }
}
