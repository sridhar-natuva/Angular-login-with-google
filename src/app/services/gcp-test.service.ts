import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GoogleAPIService {

  constructor(private _http: HttpClient) { }

  private baseURL: string = "https://us-central1-angular-deploy-254205.cloudfunctions.net";

  public createUser(data: any): Observable<any> {
    let data1 = {
      "user": data
    }
    return this._http.post(`${this.baseURL}/createUser`, data1, { responseType: "text" })
  }

  public readUser(): Observable<any> {

    return this._http.get(`${this.baseURL}/readUser`)
  }

  public updateUser(payload): Observable<any> {

    return this._http.post(`${this.baseURL}/updateUser`, payload,{ responseType: "text" })
  }

  public deleteUser(payload): Observable<any> {

    return this._http.post(`${this.baseURL}/deleteUser`, payload,{ responseType: "text" })
  }






  // public updateUser(): Observable<any> {

  //   return this._http.get(`${this.baseURL}/updateUser`, { responseType: "text" })
  // }


}
