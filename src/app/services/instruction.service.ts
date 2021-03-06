import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Instruction } from "../models/instruction";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class InstructionService {
  private _url: string = "http://localhost:3000/instructions";

  constructor(private http: HttpClient) {}

  getInstructions(): Observable<Instruction[]> {
    return this.http.get<Instruction[]>(this._url);
  }
}
