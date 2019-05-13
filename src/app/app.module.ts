import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { ProgramComponent } from "./components/program/program.component";
import { ToolboxComponent } from "./components/toolbox/toolbox.component";
import { ProgramEntryComponent } from "./components/program-entry/program-entry.component";
import { InstructionService } from "./services/instruction.service";
import { ProgramEntriesService } from "./services/program-entries.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { SetMaterialDimensionsComponent } from "./components/set-material-dimensions/set-material-dimensions.component";
import { InstructionDropdownFormComponent } from "./components/instruction-dropdown-form/instruction-dropdown-form.component";
import { SetCutLocationComponent } from "./components/set-cut-location/set-cut-location.component";
import { CoordinatesComponent } from "./components/coordinates/coordinates.component";

@NgModule({
  declarations: [
    AppComponent,
    ProgramComponent,

    ToolboxComponent,
    ProgramEntryComponent,
    SetMaterialDimensionsComponent,
    InstructionDropdownFormComponent,
    SetCutLocationComponent,
    CoordinatesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [InstructionService, ProgramEntriesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
