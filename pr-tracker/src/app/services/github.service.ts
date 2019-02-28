import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from "rxjs/internal/operators/catchError";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(
    private http: HttpClient
  ) { }

  //#region tax credits
  getRepos(): Observable<any> {
    return this.http.get<any>("https://api.github.com/orgs/snagajob/repos")
      .pipe(catchError((error: any) => observableThrowError(error.json)));
  }

  getPulls(repo: string): Observable<any> {
    return this.http.get<any>(`https://api.github.com/repos/Snagajob/${repo}/pulls`)
      .pipe(catchError((error: any) => observableThrowError(error.json)));
  }
}