import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-set-material-dimensions",
  templateUrl: "./set-material-dimensions.component.html",
  styleUrls: ["./set-material-dimensions.component.css"]
})
export class SetMaterialDimensionsComponent {
  @Output() addDimensions: EventEmitter<any> = new EventEmitter();

  private matLength: number;
  private matWidth: number;

  //Set up the new dimensions and emit up to add to database.
  submitDimensions() {
    const dimensions = {
      title: "SetMaterialBlockDimensions",
      length: this.matLength,
      width: this.matWidth
    };
    this.addDimensions.emit(dimensions);
  }
}
