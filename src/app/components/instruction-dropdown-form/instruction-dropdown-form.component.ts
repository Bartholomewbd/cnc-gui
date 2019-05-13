import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { InstructionService } from "src/app/services/instruction.service";

import { Instruction } from "../../models/instruction";

@Component({
  selector: "app-instruction-dropdown-form",
  templateUrl: "./instruction-dropdown-form.component.html",
  styleUrls: ["./instruction-dropdown-form.component.css"]
})
export class InstructionDropdownFormComponent implements OnInit {
  @Output() addEntry: EventEmitter<any> = new EventEmitter();

  instructions: Instruction[];
  instructHasError = true;
  title: string;
  cutLength: number;

  public instructionDetails: object = [];

  constructor(public instructionService: InstructionService) {}

  ngOnInit() {
    this.instructionService.getInstructions().subscribe(instructions => {
      this.instructions = instructions;
    });
  }

  searchInstruction(title: string) {
    let obj = this.instructions.filter(i => i.title == title);
    this.instructionDetails = obj;

    console.log(this.instructionDetails);
    return this.instructionDetails;
  }

  validateInstruct(value) {
    if (value === "default") {
      this.instructHasError = true;
    } else {
      this.instructHasError = false;
    }
  }

  //create a new entry and emit it
  onAdd() {
    const newEntry = {
      title: this.title,
      cutLength: this.cutLength,
      completed: false
    };
    this.addEntry.emit(newEntry);
  }
}
