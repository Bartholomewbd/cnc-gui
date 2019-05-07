import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProgramComponent } from "./components/program/program.component";
import { InstructionComponent } from "./components/instruction/instruction.component";
import { ToolboxComponent } from "./components/toolbox/toolbox.component";
import { ProgramEntryComponent } from "./components/program-entry/program-entry.component";
import { InstructionService } from "./services/instruction.service";
import { ProgramEntriesService } from "./services/program-entries.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProgramComponent,
    InstructionComponent,
    ToolboxComponent,
    ProgramEntryComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [InstructionService, ProgramEntriesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
