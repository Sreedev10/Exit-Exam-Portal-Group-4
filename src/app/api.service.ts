
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3300/exitadmin';
  private logUrl='http://localhost:3300/studentlogin';

  private studUrl = 'http://localhost:3400';  // Assuming your Node.js server is running on port 3400

  constructor(private http: HttpClient) { }


  studlogin(credentials: { regid: string }): Observable<any> {
    const url = `${this.studUrl}/login`;
        return this.http.post(url, credentials);
  }

 login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(this.baseUrl, credentials);
  }
  slogin(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(this.logUrl, credentials);
  }

  private log1Url = 'http://localhost:3600/login';
  log(credentials: { email: string, password: string }): Observable<any> {
     return this.http.post<any>(this.log1Url, credentials);
   }

  

  reg(data: any): Observable<any> {
    return this.http.post("http://localhost:3200/add", data);
  }

  // viewall(): Observable<any> {
  //   return this.http.get("http://localhost:3900/list");
  // }
  viewall(): Observable<any> {
    return this.http.get("http://localhost:3400/viewall");
  }
  view(): Observable<any> {
    return this.http.get("http://localhost:3200/view");
  }
}