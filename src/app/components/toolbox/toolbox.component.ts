import { Component, OnInit } from "@angular/core";
import { InstructionService } from "src/app/services/instruction.service";

import { Instruction } from "../../models/instruction";
@Component({
  selector: "app-toolbox",
  templateUrl: "./toolbox.component.html",
  styleUrls: ["./toolbox.component.css"]
})
export class ToolboxComponent implements OnInit {
  instructions: Instruction[];

  public instructionDetails: object = [];

  constructor(private _instructionService: InstructionService) {}

  ngOnInit() {
    this._instructionService.getInstructions().subscribe(instructions => {
      this.instructions = instructions;
    });
  }

  searchInstruction(title: string) {
    let obj = this.instructions.filter(i => i.title == title);
    this.instructionDetails = obj;

    console.log(this.instructionDetails);
    return this.instructionDetails;
  }

  onAdd(instruction) {
    console.log("Add!");
  }
}
