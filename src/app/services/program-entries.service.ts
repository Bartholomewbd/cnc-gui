import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Entry } from "../models/entry";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class ProgramEntriesService {
  private _url: string = "http://localhost:3000/programentries";

  constructor(private http: HttpClient) {}

  getEntries(): Observable<Entry[]> {
    return this.http.get<Entry[]>(this._url);
  }

  deleteEntry(entry: Entry): Observable<Entry> {
    const url = `${this._url}/${entry.id}`;
    return this.http.delete<Entry>(url, httpOptions);
  }

  addEntry(entry: Entry): Observable<Entry> {
    return this.http.post<Entry>(this._url, entry, httpOptions);
  }
}
