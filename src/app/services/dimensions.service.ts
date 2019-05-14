import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Dimensions } from "../models/dimensions";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class DimensionsService {
  private _url: string = "http://localhost:3000/dimensions/0";

  constructor(private http: HttpClient) {}

  addDimensions(dimensions: Dimensions): Observable<Dimensions> {
    return this.http.put<Dimensions>(this._url, dimensions, httpOptions);
  }
}
