import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from "rxjs/internal/operators/catchError";
import { map, take } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(
    private http: HttpClient
  ) { }

  getRepoInfo(repo): Observable<any> {
    return this.http.get<any>(`https://api.github.com/repos/${repo}`)
      .pipe(catchError((error: any) => observableThrowError(error.json)));
  }



  getPulls(repo: string): Observable<any> {
    return this.http.get<any>(`https://api.github.com/repos/${repo}/pulls`)
      .pipe(
        map((d) => d),
        catchError((error: any) => observableThrowError(error.json))
      );
  }
}
