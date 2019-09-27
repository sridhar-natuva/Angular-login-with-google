import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GcpTestService {

  constructor(private _http: HttpClient) { }

  private baseURL: string = "https://us-central1-angular-deploy-254205.cloudfunctions.net/function-1";

  public getResponse() {

    return this._http.get(`${this.baseURL}`, { responseType: 'text' })

  }

}
