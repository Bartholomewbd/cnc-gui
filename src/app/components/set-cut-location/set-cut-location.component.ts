import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-set-cut-location",
  templateUrl: "./set-cut-location.component.html",
  styleUrls: ["./set-cut-location.component.css"]
})
export class SetCutLocationComponent {
  @Output() addEntry: EventEmitter<any> = new EventEmitter();

  private xCoordinate: number;
  private yCoordinate: number;

  //add function when form is submitted and emit the entry up
  onAdd() {
    const newEntry = {
      title: "SetCutLocation",
      xCoordinate: this.xCoordinate,
      yCoordinate: this.yCoordinate,
      completed: false
    };
    this.addEntry.emit(newEntry);
  }
}
